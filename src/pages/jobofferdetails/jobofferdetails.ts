import { Component } from '@angular/core';
import { PopoverController, IonicPage, NavController, DateTime, NavParams, AlertController } from 'ionic-angular';
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
  title :string;
  userDetails:any={};
  constructor(
    public navCtrl: NavController,
    public navParam: NavParams,
    public _dataContext: DataContext,
    private commonService: CommonServices,
    public alertCtrl: AlertController
  ) {
    this.jobOfferId = this.navParam.get("jobOfferId");
    this.userDetails = this.commonService.getStoreDataFromCache(this.commonService.getCacheKeyUrl("getLoggedInUserDetails"))
  }
  ionViewDidEnter() {
    this.getJobOfferDescription();
  }
  getJobOfferDescription() {
    this._dataContext.GetJobOfferDescription(this.jobOfferId)
      .subscribe(response => {
        if (response && response != null) {
          this.publishedJobOfferDesc = response;
          this.title = this.publishedJobOfferDesc.Job.JobName;
          //if (this.publishedJobOfferDesc.Employer)
            this.publishedJobOfferDesc.Disponibility = moment(this.publishedJobOfferDesc.Disponibility).format("DD-MMM-YYYY");
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
