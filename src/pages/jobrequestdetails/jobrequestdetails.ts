import { Component } from '@angular/core';
import { PopoverController, IonicPage, NavController, DateTime, NavParams } from 'ionic-angular';
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
  constructor(
    public navCtrl: NavController,
    public navParam: NavParams,
    public _dataContext: DataContext,
    private commonService: CommonServices
  ) {
    this.jobRequestId = this.navParam.get("jobRequestId");
  }
  ionViewDidEnter() {
    this.getJobRequestDescription();
  }
  getJobRequestDescription() {
    this._dataContext.GetJobRequestDescription(60)
      .subscribe(response => {
        if (response && response != null) {
          this.publishedJobRequestDesc = response;
          if (this.publishedJobRequestDesc.Candidate)
            this.publishedJobRequestDesc.Candidate.Disponibility = moment(this.publishedJobRequestDesc.Candidate.Disponibility).format("DD-MMM-YYYY");
        }
        else
          this.commonService.onMessageHandler("No job request details available.", 0);
      },
        error => {
          this.commonService.onMessageHandler("Failed to retrieve job request details. Please try again", 0);
        });
  }
}
