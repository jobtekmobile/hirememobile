import { Component } from '@angular/core';
import { PopoverController, IonicPage, NavController, DateTime, NavParams } from 'ionic-angular';
import { PublishedJobDescModel } from '../../../interfaces/publishedjob';

@IonicPage()
@Component({
  selector: 'page-publishedjobdesc',
  templateUrl: 'publishedjobdesc.html'
})
export class PublishedJobDesc {
  isAvailable: boolean = true;
  publishedJobDesc: any = {};
  jobRequestDetails:any={};
  constructor(public navCtrl: NavController,public navParam:NavParams) {
    this.jobRequestDetails = this.navParam.get("selectedJobRequest");
  }
  ionViewDidEnter() {
    this.getPublishedJobDesc();
  }
  getPublishedJobDesc() {

  }
  // selectedJobRequestDetails(id){
  //   this._dataContext.GetJobRequestDetailsById(id)
  //     .subscribe(response => {
  //       if (response.length > 0) {
  //         this.publishedJobResult = response;
  //         this.publishedJobResult.forEach(element => {
  //           element.PublishedDate = moment(element.PublishedDate).format("DD-MMM-YYYY");
  //         });
  //       }
  //       else
  //         this.commonService.onMessageHandler("No job found.", 0);
  //     },
  //       error => {
  //         this.commonService.onMessageHandler("Failed to retrieve jobs. Please try again", 0);
  //       });
  // }
}
