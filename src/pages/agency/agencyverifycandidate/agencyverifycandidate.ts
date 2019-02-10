import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { CommonServices } from '../../../providers/common.service';
import { DataContext } from '../../../providers/dataContext.service';
import { ImageViewerController } from 'ionic-img-viewer';
@IonicPage()
@Component({
  selector: 'page-agencyverifycandidate',
  templateUrl: 'agencyverifycandidate.html',
})
export class AgencyverifycandidatePage {

  _imageViewerCtrl: ImageViewerController;
  public candidates: Array<any> = [];
  userDetails:any={};
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public _dataContext: DataContext, private commonService: CommonServices,imageViewerCtrl: ImageViewerController) {
      this._imageViewerCtrl = imageViewerCtrl;
  }

  ionViewWillEnter() {
    this.getLoggedInUserDetailsFromCache();
  }
  getLoggedInUserDetailsFromCache() {
    //this.loggedInUserDetails = JSON.parse(localStorage.getItem("loggedInUserCredential"));;
    this.commonService.getStoreDataFromCache(this.commonService.getCacheKeyUrl("getLoggedInUserDetails"))
      .then((result) => {
        if (result && result.userId) {
          this.userDetails = result;
          this.getMyCandidates();
        }
        else {
          this.navCtrl.setRoot("LoginPage");
        }
      });
  }
  //   getActiveCategories() {
  //     this._dataContext.GetActiveCategories()
  //       .subscribe(response => {
  //         if (response.length > 0) {
  //           this.categories = response;
  //           this.selectedCategory = this.categories[0];
  //           this.filterDataBySelectedCategory(this.categories[0].JobCategoryId);
  //         }
  //         else
  //           this.commonService.onMessageHandler("No category found.", 0);
  //       },
  //         error => {
  //           this.commonService.onMessageHandler("Failed to retrieve categories. Please try again", 0);
  //         });
  //   }
  //   public filterDataBySelectedCategory(categoryId: number): void {
  //     // Handle what to do when a category is selected
  //     let pageNo = categoryId - 1;
  //     this.slides.slideTo(pageNo, 500);
  //     // this.categories.filter(item => {
  //     //   if (item.JobCategoryId == categoryId)
  //     //     this.selectedJobByCategoryId = item.Jobs;
  //     // });
  // this.getMyCandidates();

  //   }
  getMyCandidates() {
    this._dataContext.GetMyCandidatesForAgency(this.userDetails.userId)
      .subscribe(response => {
        console.log(response);
        this.candidates = response;
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
  // // Method executed when the slides are changed
  // public slideChanged(): void {
  //   let currentIndex = this.slides.getActiveIndex();
  //   // this.showLeftButton = currentIndex !== 0;
  //   // this.showRightButton = currentIndex !== Math.ceil(this.slides.length() / 3);
  // }

  // // Method that shows the next slide
  // public slideNext(): void {
  //   this.slides.slideNext();
  // }

  // // Method that shows the previous slide
  // public slidePrev(): void {
  //   this.slides.slidePrev();
  // }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AgencyverifycandidatePage');
  }
  presentImage(myImage) {
  
    const imageViewer = this._imageViewerCtrl.create(myImage);
    imageViewer.present();
 
    // setTimeout(() => imageViewer.dismiss(), 1000);
    // imageViewer.onDidDismiss(() => alert('Viewer dismissed'));
  }
}
