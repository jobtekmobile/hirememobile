import { Component } from '@angular/core';
import { PopoverController, IonicPage, NavController, DateTime, NavParams, AlertController, Events } from 'ionic-angular';
import { DataContext } from '../../providers/dataContext.service';
import { CommonServices } from '../../providers/common.service';
import moment from 'moment';
@IonicPage()
@Component({
  selector: 'page-jobofferdetails',
  templateUrl: 'jobofferdetails.html'
})
export class JobOfferDetails {
  isAvailable: boolean = true;
  jobOfferId: number;
  publishedJobOfferDesc: any = null;
  title: string;
  userDetails: any = {};
  loggedInUserDetails: any = {};
  constructor(
    public navCtrl: NavController,
    public navParam: NavParams,
    public _dataContext: DataContext,
    private commonService: CommonServices,
    public alertCtrl: AlertController,
    public events: Events
  ) {
    this.jobOfferId = this.navParam.get("jobOfferId");

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
          this.loggedInUserDetails = result;
          this.getJobOfferDescription();
        }
        else {
          this.navCtrl.setRoot("LoginPage");
        }
      });
  }
  getJobOfferDescription() {
    this._dataContext.GetJobOfferDescription(this.jobOfferId)
      .subscribe(response => {
        if (response && response != null) {
          this.publishedJobOfferDesc = response;
          this.title = this.publishedJobOfferDesc.Job.JobName;
          //if (this.publishedJobOfferDesc.Employer)
          this.publishedJobOfferDesc.Disponibility = moment(this.publishedJobOfferDesc.Disponibility).format("DD-MMM-YYYY");
          this.publishedJobOfferDesc.JobOfferJobTasks.forEach(element => {
            element.JobTask.IconImage = element.JobTask.IconImage.substr(1, element.JobTask.IconImage.length)
            element.JobTask.SubTasks.forEach(element1 => {
              element1.IconImage = element1.IconImage.substr(1, element1.IconImage.length)
            });
          });
        }
        else
          this.commonService.onMessageHandler("No job offer details available.", 0);
      },
        error => {
          this.commonService.onMessageHandler("Failed to retrieve job offer details. Please try again", 0);
        });
  }

  validateJobOffer() {
    this._dataContext.ValidateJobOffer(this.publishedJobOfferDesc.JobOfferId)
      .subscribe(response => {
        if (response.Status == "OK") {
          this.commonService.onMessageHandler(response.Message, 1);
          // this.getUnverifiedJobOffersForAdmin();
          this.events.publish('jobofferdetailpage', Date());
          this.navCtrl.pop();
        }
      },
        error => {
          this.commonService.onMessageHandler("Failed to verify job offer. Please try again", 0);
        });
  }

  verify() {
    const confirm = this.alertCtrl.create({
      title: 'Verify Job Offer?',
      message: 'Do you want to verify this job offer?',
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
            this.validateJobOffer();
          }
        }
      ]
    });
    confirm.present();
  }
}
