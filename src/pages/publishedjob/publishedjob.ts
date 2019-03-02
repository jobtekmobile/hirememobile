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
  isAvailable: boolean = true;
  publishedJobResult: any = [];
  searchFilterData: any = {
    Job: 0
  };
  tapOption = [];
  tabValue: string;
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
    this.tapOption = [{ Value: "JOB REQUEST", Key: "JobRequest" }, { Value: "JOB OFFER", Key: "JobOffer" }];
    this.searchFilterData.Job = this.navParam.get("jobId");
    this.title = this.navParam.get("jobName");
    this.publishedJobResult = [];

  }
  ionViewDidEnter() {
    this.tabValue = "JobRequest";
    this.getLoggedInUserDetailsFromCache();
  }
  getLoggedInUserDetailsFromCache() {
    this.commonService.getStoreDataFromCache(this.commonService.getCacheKeyUrl("getLoggedInUserDetails"))
    .then((result) => {
      if (result && result.userId) {
        this.loggedInUserDetails = result;
        this.getPublishedJobRequest();
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
  tabSelection(event, option) {
    this.publishedJobResult = [];
    if (option == 0) {
      this.tabValue = "JobRequest";
      this.getPublishedJobRequest();
    }
    else {
      this.tabValue = "JobOffer";
      this.getPublishedJobReponse();
    }
  }

  openFilter() {
    let index = 0;
    if (this.tabValue == "JobRequest") {
      index = 0;
    } else {
      index = 1;
    }
  
    let filterModal = this.modalCtrl.create("FilterPage", { activeTab: index,Job:this.searchFilterData.Job,JobName:this.title });
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
