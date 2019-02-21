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
  selector: 'page-jobcategories',
  templateUrl: 'jobcategories.html',
})
export class JobCategory {
  @ViewChild(Slides) slides: Slides;
  public selectedCategory: any;
  public categories: Array<any> = [];
  public showLeftButton: boolean;
  public showRightButton: boolean;
  selectedJobByCategoryId: any = [];
  isAvailable: boolean = true;
  jobtitle: string;
  constructor(
    public injector: Injector,
    public navCtrl: NavController,
    public navParams: NavParams,
    public _dataContext: DataContext,
    private commonService: CommonServices,
    public navParam: NavParams,
  ) {
    this.categories = this.navParam.get("category");
  }
  ionViewWillEnter() {
    if (this.categories.length == 0)
      this.getActiveCategories();
    else {
      this.categories.forEach(element => {
        element.IconImage = element.IconImage.substr(1, element.IconImage.length)
        if (element.Jobs.length > 0) {
          element.Jobs.forEach(element1 => {
            element1.IconImage = element1.IconImage.substr(1, element1.IconImage.length)
          });
        }
      });
      this.selectedCategory = this.categories[0];
      this.filterDataBySelectedCategory(this.categories[0].JobCategoryId, this.categories[0].CategoryName);
    }
  }
  //Get all active categories for search job
  getActiveCategories() {
    this._dataContext.GetActiveCategories()
      .subscribe(response => {
        if (response.length > 0) {
          this.isAvailable = true;
          this.categories = response;
          this.categories.forEach(element => {
            // element.IconImage = element.IconImage.substr(1, element.IconImage.length)
            // if (element.Jobs.length > 0) {
            //   element.Jobs.forEach(element1 => {
            //     element1.IconImage = element1.IconImage.substr(1, element1.IconImage.length)
            //   });
            // }
            element.IconImage = element.IconImage.substr(1, element.IconImage.length)
            if (element.Jobs.length > 0) {
              element.Jobs.forEach(element1 => {
                element1.IconImage = element1.IconImage.substr(1, element1.IconImage.length)
              });
            }
          });
          this.selectedCategory = this.categories[0];
          this.filterDataBySelectedCategory(this.categories[0].JobCategoryId, this.categories[0].CategoryName);
        }
        else {
          this.isAvailable = false;
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

  public filterDataBySelectedCategory(categoryId: number, categoryName: string): void {
    this.jobtitle = categoryName;
    this.isAvailable = true;
    // Handle what to do when a category is selected
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
  gotoSelectedCategory(id) {
    this.navCtrl.push("CreateJobRequestForm", { jobId: id });
  }

}


































