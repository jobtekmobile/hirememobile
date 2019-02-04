import { Component, ViewChild, Injector } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { DataContext } from '../../providers/dataContext.service';
import { CommonServices } from '../../providers/common.service';

/**
 * Generated class for the FavoritejoboffersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favoritejoboffers',
  templateUrl: 'favoritejoboffers.html',
})
export class FavoritejoboffersPage {

  @ViewChild(Slides) slides: Slides;
  public selectedCategory: any;
  public categories: Array<any>;
  public showLeftButton: boolean;
  public showRightButton: boolean;
  tabValue: number;
  isAvailable: boolean = true;
  publishedJobResult: any = [];
  myFavListByCategoryId: any = {};
  allMyFavouriteList: any = [];
  loggedInUserDetails: any = {};
  constructor(
    public injector: Injector,
    public navCtrl: NavController,
    public navParams: NavParams,
    public _dataContext: DataContext,
    private commonService: CommonServices) {
    this.publishedJobResult = [];
    this.tabValue = 0;
  }
  // ...
  ionViewWillEnter() {
    this.getLoggedInUserDetailsFromCache();
  }
  getLoggedInUserDetailsFromCache() {
    this.loggedInUserDetails = localStorage.getItem("loggedInUserCredential");
    this.getActiveCategories();
  }
  //Get all active categories for search job
  getActiveCategories() {
    this._dataContext.GetActiveCategories()
      .subscribe(response => {
        if (response.length > 0) {
          this.categories = response;
          this.selectedCategory = this.categories[0];
          this.getMyFavOffers();
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
    this.allMyFavouriteList.filter(item => {
      if (item.Job.JobCategoryId == categoryId)
        this.myFavListByCategoryId = item;
    });
  }
  getMyFavOffers() {
    this._dataContext.GetMyFavouriteOffers(1)
      .subscribe(response => {
        if (response.length > 0) {
          this.isAvailable = true;
          this.allMyFavouriteList = response;
          this.filterDataBySelectedCategory(this.categories[0].JobCategoryId);
        }
        else {
          this.myFavListByCategoryId=[];
          this.isAvailable = false;
          this.commonService.onMessageHandler("No category found.", 0);
        }
      },
        error => {
          this.commonService.onMessageHandler("Failed to retrieve categories. Please try again", 0);
        });
  }
  deleteFavouriteJobOffer(id) {
    this._dataContext.DeleteFavourite(2, id)
      .subscribe(response => {
        if (response.length > 0) {
        }
        else
          this.commonService.onMessageHandler("Something went wrong. Please try again", 0);
      },
        error => {
          this.commonService.onMessageHandler("Failed to add favourite. Please try again", 0);
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
  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad JobrequestsPage');
  // }

}
