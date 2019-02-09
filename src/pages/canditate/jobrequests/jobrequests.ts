import { Component, ViewChild, Injector } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, AlertController } from 'ionic-angular';
import { DataContext } from '../../../providers/dataContext.service';
import { CommonServices } from '../../../providers/common.service';
import moment from 'moment';

/**
 * Generated class for the JobrequestsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-jobrequests',
  templateUrl: 'jobrequests.html',
})
export class JobrequestsPage {

  @ViewChild(Slides) slides: Slides;
  public selectedCategory: any;
  public categories: Array<any>;
  public showLeftButton: boolean;
  public showRightButton: boolean;
  tabValue: number;
  isAvailable: boolean = true;
  publishedJobResult: any = [];
  allMyJobRequestList: any = [];
  loggedInUserDetails: any = {};
  myJobRequestListByCategoryId: any = [];

  constructor(public injector: Injector, public navCtrl: NavController,
    public navParams: NavParams,
    public _dataContext: DataContext,
    private commonService: CommonServices, public alerCtrl: AlertController) {
    this.publishedJobResult = [];
  }
  // ...
  ionViewWillEnter() {
    this.getLoggedInUserDetailsFromCache();
  }
  getLoggedInUserDetailsFromCache() {
    this.loggedInUserDetails = JSON.parse(localStorage.getItem("loggedInUserCredential"));
    this.getActiveCategories();
  }
  //Get all active categories for search job
  getActiveCategories() {
    this._dataContext.GetActiveCategories()
      .subscribe(response => {
        if (response.length > 0) {
          this.categories = response;
          this.selectedCategory = this.categories[0];
          this.getMySavedJobRequest();
          //this.filterDataBySelectedCategory(this.categories[0].JobCategoryId);
        }
        else
          this.commonService.onMessageHandler("No category found.", 0);
      },
        error => {
          this.commonService.onMessageHandler("Failed to retrieve categories. Please try again", 0);
        });
  }
  public filterDataBySelectedCategory(categoryId: number): void {
    // Handle what to do when a category is selected
    this.isAvailable = true;
    this.myJobRequestListByCategoryId = [];
    let pageNo = categoryId - 1;
    this.slides.slideTo(pageNo, 500);
    this.allMyJobRequestList.filter(item => {
      if (item.JobCategoryId == categoryId)
        this.myJobRequestListByCategoryId.push(item);
    });
    if(this.myJobRequestListByCategoryId.length==0)
    this.isAvailable = false;
  }
  getMySavedJobRequest() {
    this._dataContext.GetMySavedJobRequest(this.loggedInUserDetails.userId)
      .subscribe(response => {
        if (response.length > 0) {
          this.isAvailable = true;
          this.allMyJobRequestList = response;
          this.allMyJobRequestList.forEach(element => {
            element.PublishedDate = moment(element.PublishedDate).format("DD-MMM-YYYY");
          });
          this.filterDataBySelectedCategory(this.categories[0].JobCategoryId);
        }
        else {
          this.myJobRequestListByCategoryId = [];
          this.isAvailable = false;
          this.commonService.onMessageHandler("No result found.", 0);
        }
      },
        error => {
          this.commonService.onMessageHandler("Failed to retrieve notification details. Please try again", 0);
        });
  }
  private initializeCategories(): void {

    // Select it by defaut
    this.selectedCategory = this.categories[0];

    // Check which arrows should be shown
    this.showLeftButton = false;
    this.showRightButton = this.categories.length > 3;
  }

  public filterData(categoryId: number): void {
    // Handle what to do when a category is selected
    let pageNo = categoryId - 1;
    this.slides.slideTo(pageNo, 500);

  }

  // Method executed when the slides are changed
  public slideChanged(): void {
    let currentIndex = this.slides.getActiveIndex();
    // this.showLeftButton = currentIndex !== 0;
    // this.showRightButton = currentIndex !== Math.ceil(this.slides.length() / 3);
  }

  // Method that shows the next slide
  public slideNext(): void {
    this.slides.slideNext();
  }

  // Method that shows the previous slide
  public slidePrev(): void {
    this.slides.slidePrev();
  }
  gotoCreate() {
    this.navCtrl.push("JobCategory", { category: this.categories });
  }
  gotoDetails() {
    // this.navCtrl.push("JobRequestDescDetails",{jobRequestId:});
  }
  getSelectedDetails(id) {
    this.navCtrl.push("JobRequestDescDetails", { jobRequestId: id });
  }
  deleteSelectedJobRequests(id, index) {
    let method = this.alerCtrl.create({
      title: "Please Confirm!",
      message: "Do you want to delete ?",
      cssClass: 'alert-header-back-style',
      buttons: [
        {
          text: 'CANCEL',
          cssClass: 'cancel-btn-style',
          handler: () => {
            // return false;
          }
        },
        {
          text: "DELETE",
          cssClass: 'ok-btn-style',
          handler: () => {
            this._dataContext.DeleteJobRequest(this.loggedInUserDetails.userId, id)
              .subscribe(response => {
                if (response.Status == "OK") {
                  this.myJobRequestListByCategoryId.splice(index, 1);
                  this.getActiveCategories();
                  // this.allMyJobRequestList.filter((item, index) => {
                  //   if (item.JobCategoryId == id) {
                  //     this.allMyJobRequestList.splice(this.allMyJobRequestList, 1);
                  //   }
                  // });
                  this.commonService.onMessageHandler(response.Message, 1);
                }
                else
                  this.commonService.onMessageHandler("Failed to delete. Please try again", 0);
              },
                error => {
                  this.commonService.onMessageHandler("Failed to delete. Please try again", 0);
                });
          }
        }
      ]
    });
    method.present();
  }
}
