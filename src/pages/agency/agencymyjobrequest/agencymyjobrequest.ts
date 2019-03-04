import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, ModalController, AlertController } from 'ionic-angular';
import { CommonServices } from '../../../providers/common.service';
import { DataContext } from '../../../providers/dataContext.service';
import { ImageViewerController } from 'ionic-img-viewer';
import moment from 'moment';
/**
 * Generated class for the AgencymyjobrequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agencymyjobrequest',
  templateUrl: 'agencymyjobrequest.html',
})
export class AgencymyjobrequestPage {

  _imageViewerCtrl: ImageViewerController;
  public jobRequests: Array<any> = [];
  public allJobRequestList: Array<any> = [];

  @ViewChild(Slides) slides: Slides;
  public selectedCategory: any;
  public categories: Array<any> = [];
  public showLeftButton: boolean;
  public showRightButton: boolean;
  selectedJobByCategoryId: Array<any> = [];
  public modalCtrl: ModalController
  loggedInUserDetails:any={};
  constructor(public alerCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams,
    public _dataContext: DataContext, private commonService: CommonServices, imageViewerCtrl: ImageViewerController) {
    this._imageViewerCtrl = imageViewerCtrl;
  }

  ionViewWillEnter() {
    this.getLoggedInUserDetailsFromCache();
  }
  getLoggedInUserDetailsFromCache() {
    this.commonService.getStoreDataFromCache(this.commonService.getCacheKeyUrl("getLoggedInUserDetails"))
      .then((result) => {
        if (result && result.userId) {
          this.loggedInUserDetails = result;
          this.getActiveCategories();
        }
        else {
          this.navCtrl.setRoot("LoginPage");
        }
      });
  }
  getActiveCategories() {
    this._dataContext.GetActiveCategories()
      .subscribe(response => {
        if (response.length > 0) {
          this.categories = response;
          this.selectedCategory = this.categories[0];
          // this.filterDataBySelectedCategory(this.categories[0].JobCategoryId);
          this.getMyJobRequests();
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
    let pageNo = categoryId - 1;
    this.slides.slideTo(pageNo, 500);
    this.jobRequests = [];
    this.allJobRequestList.filter(item => {
      if (item.JobCategoryId == categoryId)
        this.jobRequests.push(item);
    });


  }
  getMyJobRequests() {
    this._dataContext.GetMyJobRequestsForAgency(this.loggedInUserDetails.userId)
      .subscribe(response => {
        console.log(response);
        this.allJobRequestList = response;
        this.allJobRequestList.forEach(element => {
          element.PublishedDate = moment(element.PublishedDate).format("DD-MMM-YYYY");
          
        });  
        this.filterDataBySelectedCategory(this.categories[0].JobCategoryId);
        // if (response.length > 0) {
        //   this.categories = response;
        //   this.selectedCategory = this.categories[0];

        // }
        // else
        //   this.commonService.onMessageHandler("No category found.", 0);
      },
        error => {
          this.commonService.onMessageHandler("Failed to retrieve categories. Please try again", 0);
        });
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
  ionViewDidLoad() {
    console.log('ionViewDidLoad AgencyverifycandidatePage');
  }
  presentImage(myImage) {

    const imageViewer = this._imageViewerCtrl.create(myImage);
    imageViewer.present();

    // setTimeout(() => imageViewer.dismiss(), 1000);
    // imageViewer.onDidDismiss(() => alert('Viewer dismissed'));
  }
  gotoDetails(item) {
    this.navCtrl.push("JobRequestDescDetails", { jobRequestId: item.JobRequestId });
  }
  gotoCreate() {
    this.navCtrl.push("JobCategory", { category: this.categories,fromPage:"agencyJobRequest" });
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
            this.commonService.onMessageHandler("API not implemented",1)
          }
        }
      ]
    });
    method.present();
  }
}