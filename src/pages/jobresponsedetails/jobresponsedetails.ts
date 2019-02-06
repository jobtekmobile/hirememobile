import { Component } from '@angular/core';
import { PopoverController, IonicPage, NavController, DateTime, NavParams } from 'ionic-angular';
import { DataContext } from '../../providers/dataContext.service';
import { CommonServices } from '../../providers/common.service';

@IonicPage()
@Component({
  selector: 'page-jobresponsedetails',
  templateUrl: 'jobresponsedetails.html'
})
export class JobResponseDescDetails {
  isAvailable: boolean = true;
  jobResponseId: number;
  publishedJobResponseDesc: any = null;
  constructor(
    public navCtrl: NavController,
    public navParam: NavParams,
    public _dataContext: DataContext,
    private commonService: CommonServices
  ) {
    this.jobResponseId = this.navParam.get("jobResponseId");
  }
  ionViewDidEnter() {
    this.getJobResponseDescription();
  }
  getJobResponseDescription() {
    this._dataContext.GetJobResponseDescription(this.jobResponseId)
      .subscribe(response => {
        if (response && response != null) {
          this.publishedJobResponseDesc = response;
        }
        else
          this.commonService.onMessageHandler("No job response details available.", 0);
      },
        error => {
          this.commonService.onMessageHandler("Failed to retrieve job response details. Please try again", 0);
        });
  }
}
