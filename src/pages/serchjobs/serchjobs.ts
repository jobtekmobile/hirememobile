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


@IonicPage()
@Component({
  selector: 'page-serchjobs',
  templateUrl: 'serchjobs.html',
})
export class SerchjobsPage {


  @ViewChild(Slides) slides: Slides;

  public selectedCategory: any;
  public categories: Array<any>;
  public showLeftButton: boolean;
  public showRightButton: boolean;

  constructor(public injector: Injector,public navCtrl: NavController, public navParams: NavParams) {
    this.categories = [
      { id: 1, name: "Home Job" }, 
      { id: 2, name: "Troubleshooting" }, 
      { id: 3, name: "HairStyle/Care" }, 
      { id: 4, name: "Ceremony" }, 
      { id: 5, name: "Course" }
    ];
    this.selectedCategory = this.categories[0];
  }
  // ...

  private initializeCategories(): void {

    // Select it by defaut
    this.selectedCategory = this.categories[0];

    // Check which arrows should be shown
    this.showLeftButton = false;
    this.showRightButton = this.categories.length > 3;
  }

  public filterData(categoryId: number): void {
    // Handle what to do when a category is selected
    let pageNo = categoryId-1;
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
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad SerchjobsPage');
  }
  goto(){
    this.navCtrl.push("PublishedJob");
  }

}


































