import { Component } from '@angular/core';
import { PopoverController, IonicPage, NavController, DateTime, NavParams } from 'ionic-angular';
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
  constructor(
    public navCtrl: NavController,
    public navParam: NavParams,
    public _dataContext: DataContext,
    private commonService: CommonServices
  ) {
    this.jobOfferId = this.navParam.get("jobOfferId");
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
}
