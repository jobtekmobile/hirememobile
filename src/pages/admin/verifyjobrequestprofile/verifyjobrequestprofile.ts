import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, Events } from 'ionic-angular';
import { ImageViewerController } from 'ionic-img-viewer';
import { DataContext } from '../../../providers/dataContext.service';
import { CommonServices } from '../../../providers/common.service';
import moment from 'moment';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-verifyjobrequestprofile',
  templateUrl: 'verifyjobrequestprofile.html',
})
export class VerifyjobrequestprofilePage {
  @ViewChild(Slides) slides: Slides;
  public selectedCategory: any;
  public categories: Array<any> = [];
  public showLeftButton: boolean;
  public showRightButton: boolean;
  selectedJobByCategoryId: Array<any> = [];
  _imageViewerCtrl: ImageViewerController;
  jobrequests: any = [];
  allJobRequestList : any = [];
  loggedInUserDetails:any={};
  constructor(public navCtrl: NavController, public navParams: NavParams,imageViewerCtrl: ImageViewerController,
    public _dataContext: DataContext, private commonService: CommonServices, public alertCtrl: AlertController,public events:Events) {
    this._imageViewerCtrl = imageViewerCtrl;
    this.events.subscribe('reloadPage1',(time) => {
      this.getUnverifiedJobRequestsForAdmin();
     });
  }
  ionViewDidLoad() {
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
  presentImage(myImage) {
  
    const imageViewer = this._imageViewerCtrl.create(myImage);
    imageViewer.present();
 
    // setTimeout(() => imageViewer.dismiss(), 1000);
    // imageViewer.onDidDismiss(() => alert('Viewer dismissed'));
  }
  getUnverifiedJobRequestsForAdmin() {
    this._dataContext.GetUnverifiedJobRequestsForAdmin()
      .subscribe(response => {
        this.allJobRequestList = response;
        this.allJobRequestList.forEach(element => {
          element.PublishedDate = moment(element.PublishedDate).format("DD MMM YYYY");
        });
        this.filterDataBySelectedCategory(this.categories[0].JobCategoryId);
      },
        error => {
          this.commonService.onMessageHandler("Failed to retrieve unverified job request. Please try again", 0);
        });
  }
  validateJobRequest(item) {
    this._dataContext.ValidateJobRequest(item.JobRequestId)
      .subscribe(response => {
        if (response.Status == "OK") {
          this.commonService.onMessageHandler(response.Message, 1);
          this.getUnverifiedJobRequestsForAdmin();
        }
      },
        error => {
          this.commonService.onMessageHandler("Failed to verify job request. Please try again", 0);
        });
  }

  verify(item) {
    const confirm = this.alertCtrl.create({
      title: 'Verify Job Request?',
      message: 'Do you want to verify this job request?',
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
            this.validateJobRequest(item);
          }
        }
      ]
    });
    confirm.present();
  }
  gotoDetails(item){
    this.navCtrl.push("JobRequestDescDetails", { jobRequestId: item.JobRequestId });
  }
  getActiveCategories() {
    this._dataContext.GetActiveCategories()
      .subscribe(response => {
        if (response.length > 0) {
          this.categories = response;
          this.selectedCategory = this.categories[0];
         // this.filterDataBySelectedCategory(this.categories[0].JobCategoryId);
         this.getUnverifiedJobRequestsForAdmin();
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
    this.jobrequests = [];
    this.allJobRequestList.filter(item => {
      if (item.Job.JobCategoryId == categoryId)
        this.jobrequests.push(item);
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
}
