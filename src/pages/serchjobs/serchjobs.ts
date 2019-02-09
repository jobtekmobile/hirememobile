import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SerchjobsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// Angular
import { Injector, ViewChild } from '@angular/core';

// Ionic
import { Slides } from 'ionic-angular';
import { CommonServices } from '../../providers/common.service';
import { DataContext } from '../../providers/dataContext.service';


@IonicPage()
@Component({
  selector: 'page-serchjobs',
  templateUrl: 'serchjobs.html',
})
export class SearchjobsPage {
  @ViewChild(Slides) slides: Slides;
  public selectedCategory: any;
  public categories: Array<any> = [];
  public showLeftButton: boolean;
  public showRightButton: boolean;
  isAvailable: boolean = true;
  selectedJobByCategoryId: any = [];
  jobtitle:string;
  constructor(
    public injector: Injector,
    public navCtrl: NavController,
    public navParams: NavParams,
    public _dataContext: DataContext,
    private commonService: CommonServices
  ) {

  }
  ionViewWillEnter() {
    this.getActiveCategories();
  }
  
  //Get all active categories for search job
  getActiveCategories() {
    this._dataContext.GetActiveCategories()
      .subscribe(response => {
        if (response.length > 0) {
          this.isAvailable = true;
          this.categories = response;
          this.selectedCategory = this.categories[0];
          this.filterDataBySelectedCategory(this.categories[0].JobCategoryId,this.categories[0].CategoryName);
        }
        else {
          this.isAvailable = true;
          this.commonService.onMessageHandler("No category found.", 0);
        }
      },
        error => {
          this.commonService.onMessageHandler("Failed to retrieve categories. Please try again", 0);
        });
  }

  private initializeCategories(): void {
    // Select it by defaut
    this.selectedCategory = this.categories[0];
    // Check which arrows should be shown
    this.showLeftButton = false;
    this.showRightButton = this.categories.length > 3;
  }

  public filterDataBySelectedCategory(categoryId: number,categoryName:string): void {
    // Handle what to do when a category is selected
    this.isAvailable = true;
    this.jobtitle = categoryName;
    let pageNo = categoryId - 1;
    this.slides.slideTo(pageNo, 500);
    this.categories.filter(item => {
      if (item.JobCategoryId == categoryId)
        this.selectedJobByCategoryId = item.Jobs;
    });
    if (this.selectedJobByCategoryId.length == 0)
      this.isAvailable = false;
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
  //get selected job id and get all the published jobs.
  gotoSelectedCategory(id,name) {
    this.navCtrl.push("PublishedJob", { jobId: id,jobName:name });
  }

}


































