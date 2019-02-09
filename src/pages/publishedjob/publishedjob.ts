import { Component } from '@angular/core';
import { PopoverController, IonicPage, NavController, DateTime, NavParams, AlertController } from 'ionic-angular';
//import { PublishedJobModel } from '../../interfaces/publishedjob';
import { ModalController, ViewController } from 'ionic-angular';
import { CommonServices } from '../../providers/common.service';
import { DataContext } from '../../providers/dataContext.service';
import moment from 'moment';
@IonicPage()
@Component({
  selector: 'page-publishedjob',
  templateUrl: 'publishedjob.html'
})
export class PublishedJob {
  tabValue: string;
  isAvailable: boolean = true;
  publishedJobResult: any = [];
  searchFilterData: any = {
    Job: 0
  };
  tapOption:any=[];
  loggedInUserDetails: any = {};
  title: string;
  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public navParam: NavParams,
    public _dataContext: DataContext,
    private commonService: CommonServices,
    public alertCtrl: AlertController
  ) {
    this.searchFilterData.Job = this.navParam.get("jobId");
    this.title = this.navParam.get("jobName");
    this.publishedJobResult = [];
    this.tapOption[0] = "JOB REQUEST";
    this.tapOption[1] = "JOB OFFER";
  }
  ionViewDidEnter() {
    this.tabValue = "0";
    this.getPublishedJobRequest();
    this.getLoggedInUserDetailsFromCache();
  }
  getLoggedInUserDetailsFromCache() {
    //this.loggedInUserDetails = JSON.parse(localStorage.getItem("loggedInUserCredential"));;
    this.commonService.getStoreDataFromCache(this.commonService.getCacheKeyUrl("getLoggedInUserDetails"))
      .then((result) => {
        if (result && result.userId) {
          this.loggedInUserDetails = result;
        }
        else {
          this.navCtrl.setRoot("LoginPage");
        }
      });
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
    this.navCtrl.push("JobRequestDescDetails", { jobRequestId: value.JobRequestId });
    // this.navCtrl.push("PublishedJobDesc", value);
  }
  selectedJobOfferDetails(value) {
    this.navCtrl.push("JobOfferDetails", { jobOfferId: value.JobofferId });
    // this.navCtrl.push("PublishedJobDesc", value);
  }

  makeFavourite(id) {
    const confirm = this.alertCtrl.create({
      title: 'Adding as favorite?',
      message: 'Do you want to make this offer as your favourite?',
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
            this._dataContext.MakeJobOfferAsFavourite(this.loggedInUserDetails.userId, id)
              .subscribe(response => {
                if (response.length > 0) {
                  this.commonService.onMessageHandler("You have successfully make this offer as favourite", 1);
                }
                else
                  this.commonService.onMessageHandler("Something went wrong. Please try again", 0);
              },
                error => {
                  this.commonService.onMessageHandler("Failed to add favourite. Please try again", 0);
                });
          }
        }
      ]
    });
    confirm.present();

  }
  //While Tab change
  tabSelection(event,option) {
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
    let filterModal = this.modalCtrl.create("FilterPage", { activeTab: this.tabValue });
    filterModal.onDidDismiss(item => {
      if (item) {
        this.isAvailable = true;
        this.publishedJobResult = item;
        this.publishedJobResult.forEach(element => {
          element.PublishedDate = moment(element.PublishedDate).format("DD-MMM-YYYY");
        });
      }
    })
    filterModal.present();
  }
}
