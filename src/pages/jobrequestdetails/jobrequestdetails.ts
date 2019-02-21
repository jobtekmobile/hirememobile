import { Component } from '@angular/core';
import { PopoverController, IonicPage, NavController, DateTime, NavParams, AlertController, Events } from 'ionic-angular';
import { DataContext } from '../../providers/dataContext.service';
import { CommonServices } from '../../providers/common.service';
import moment from 'moment';

@IonicPage()
@Component({
  selector: 'page-jobrequestdetails',
  templateUrl: 'jobrequestdetails.html'
})
export class JobRequestDescDetails {
  isAvailable: boolean = true;
  jobRequestId: number;
  publishedJobRequestDesc: any = null;
  title: string;
  userDetails: any = {};
  constructor(
    public navCtrl: NavController,
    public navParam: NavParams,
    public _dataContext: DataContext,
    private commonService: CommonServices,
    public alertCtrl: AlertController,
    public events: Events
  ) {
    this.jobRequestId = this.navParam.get("jobRequestId");
    this.userDetails = this.commonService.getStoreDataFromCache(this.commonService.getCacheKeyUrl("getLoggedInUserDetails"))
  }
  ionViewDidEnter() {
    this.getLoggedInUserDetailsFromCache();
  }
  getLoggedInUserDetailsFromCache() {
    //this.loggedInUserDetails = JSON.parse(localStorage.getItem("loggedInUserCredential"));;
    this.commonService.getStoreDataFromCache(this.commonService.getCacheKeyUrl("getLoggedInUserDetails"))
      .then((result) => {
        if (result && result.userId) {
          this.userDetails = result;
          this.getJobRequestDescription();
        }
        else {
          this.navCtrl.setRoot("LoginPage");
        }
      });
  }
  getJobRequestDescription() {
    this._dataContext.GetJobRequestDescription(this.jobRequestId)
      .subscribe(response => {
        if (response && response != null) {
          this.publishedJobRequestDesc = response;
          this.title = this.publishedJobRequestDesc.Job.JobName;
          if (this.publishedJobRequestDesc.Candidate)
            this.publishedJobRequestDesc.Candidate.Disponibility = moment(this.publishedJobRequestDesc.Candidate.Disponibility).format("DD-MMM-YYYY");

          this.publishedJobRequestDesc.JobRequestJobTasks.forEach(element => {
            element.JobTask.IconImage = element.JobTask.IconImage.substr(1, element.JobTask.IconImage.length)
            element.JobTask.SubTasks.forEach(element1 => {
              element1.IconImage = element1.IconImage.substr(1, element1.IconImage.length)
            });
          });
        }
        else
          this.commonService.onMessageHandler("No job request details available.", 0);
      },
        error => {
          this.commonService.onMessageHandler("Failed to retrieve job request details. Please try again", 0);
        });
  }
  validateJobRequest() {
    this._dataContext.ValidateJobRequest(this.publishedJobRequestDesc.JobRequestId)
      .subscribe(response => {
        if (response.Status == "OK") {
          this.commonService.onMessageHandler(response.Message, 1);
          // this.getUnverifiedJobRequestsForAdmin();
          this.events.publish('reloadPage1', Date());
          this.navCtrl.pop();
        }
      },
        error => {
          this.commonService.onMessageHandler("Failed to verify job request. Please try again", 0);
        });
  }
  Verify() {
    const confirm = this.alertCtrl.create({
      title: 'Verify Job Request?',
      message: 'Do you want to verify this job request?',
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.validateJobRequest();
          }
        }
      ]
    });
    confirm.present();
  }
}
