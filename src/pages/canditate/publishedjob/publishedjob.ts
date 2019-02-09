import { Component } from '@angular/core';
import { PopoverController, IonicPage, NavController, DateTime, NavParams } from 'ionic-angular';
//import { PublishedJobModel } from '../../interfaces/publishedjob';
import { ModalController, ViewController } from 'ionic-angular';
import { CommonServices } from '../../../providers/common.service';
import { DataContext } from '../../../providers/dataContext.service';
import moment from 'moment';
@IonicPage()
@Component({
  selector: 'page-publishedjob',
  templateUrl: 'publishedjob.html'
})
export class PublishedJob {
  tabValue: number;
  isAvailable: boolean = true;
  publishedJobResult: any = [];
  searchFilterData: any = {
    Job: 0
  };
  loggedInUserDetails: any = {};
  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public navParam: NavParams,
    public _dataContext: DataContext,
    private commonService: CommonServices
  ) {
    this.searchFilterData.Job = this.navParam.get("jobId");
    this.tabValue = 0;
    this.publishedJobResult = [];
  }
  ionViewDidEnter() {
    this.tabValue = 0;
    this.getPublishedJobRequest();
    this.getLoggedInUserDetailsFromCache();
  }
  getLoggedInUserDetailsFromCache() {
    this.loggedInUserDetails = JSON.parse(localStorage.getItem("loggedInUserCredential"));;
  }
  getPublishedJobRequest() {
    this._dataContext.GetPublishedJobRequestByJobId(this.searchFilterData)
      .subscribe(response => {
        if (response.length > 0) {
          this.isAvailable = true;
          this.publishedJobResult = response;
          this.publishedJobResult.forEach(element => {
            element.PublishedDate = moment(element.PublishedDate).format("DD-MMM-YYYY");
          });
        }
        else {
          this.isAvailable = false;
          this.commonService.onMessageHandler("No job found.", 0);
        }
      },
        error => {
          this.commonService.onMessageHandler("Failed to retrieve jobs. Please try again", 0);
        });
  }
  getPublishedJobReponse() {
    this._dataContext.GetPublishedJobReponseByJobId(this.searchFilterData)
      .subscribe(response => {
        if (response.length > 0) {
          this.isAvailable = true;
          this.publishedJobResult = response;
          this.publishedJobResult.forEach(element => {
            element.PublishedDate = moment(element.PublishedDate).format("DD-MMM-YYYY");
          });
        }
        else {
          this.isAvailable = false;
          this.commonService.onMessageHandler("No job found.", 0);
        }
      },
        error => {
          this.commonService.onMessageHandler("Failed to retrieve jobs. Please try again", 0);
        });
  }
  selectedJobRequestDetails(value) {
    this.navCtrl.push("PublishedJobDesc", value);
  }
  makeFavourite(id) {
    this._dataContext.MakeJobOfferAsFavourite(2, id)
      .subscribe(response => {
        if (response.length > 0) {
          this.commonService.onMessageHandler("You have successfully make this offer as favourite",1);
        }
        else
          this.commonService.onMessageHandler("Something went wrong. Please try again", 0);
      },
        error => {
          this.commonService.onMessageHandler("Failed to add favourite. Please try again", 0);
        });
  }
  //While Tab change
  tabSelection(option) {
    this.publishedJobResult = [];
    this.tabValue = option;
    if (option == 0) {
      this.getPublishedJobRequest();
    }
    else {
      this.getPublishedJobReponse();
    }
  }

  openFilter() {
    let contactModal = this.modalCtrl.create("FilterPage");
    contactModal.present();
  }
}
