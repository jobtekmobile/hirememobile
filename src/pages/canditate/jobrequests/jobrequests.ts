import { Component, ViewChild, Injector } from '@angular/core';
import { IonicPage, NavController, NavParams,Slides } from 'ionic-angular';

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
  constructor(public injector: Injector,public navCtrl: NavController, public navParams: NavParams) {
    this.categories = [
      { id: 1, name: "Home Job" }, 
      { id: 2, name: "Troubleshooting" }, 
      { id: 3, name: "HairStyle/Care" }, 
      { id: 4, name: "Ceremony" }, 
      { id: 5, name: "Course" }
    ];
    this.selectedCategory = this.categories[0];

    this.publishedJobResult = [];
    this.tabValue = 0;
    //if (option == 0) {
      this.publishedJobResult.push({
        Name: "Ashis",
        Image: "assets/imgs/publishedjob/user.svg",
        Age: 32,
        Experience: 4,
        Rating: 3,
        RequestType: "Individual",
        Location: "Kailash vihar, Bhubaneswar",
        Email: "ashis.mahapatra@gmail.com",
        ContactNo: "9439392845",
        PublishedDate: "27-02-1991",
        Disponability: "28-03-2019"
      });
      this.publishedJobResult.push({
        Name: "Ashis",
        Image: "assets/imgs/publishedjob/user.svg",
        Age: 32,
        Experience: 4,
        Rating: 3,
        RequestType: "Individual",
        Location: "Kailash vihar, Bhubaneswar",
        Email: "ashis.mahapatra@gmail.com",
        ContactNo: "9439392845",
        PublishedDate: "27-02-1991",
        Disponability: "28-03-2019"
      });
    
      this.publishedJobResult.push({
        Name: "Ashis Mahapatra",
        Image: "assets/imgs/publishedjob/user.svg",
        Age: 32,
        Experience: 4,
        Rating: 4,
        RequestType: "Agency",
        Location: "Kailash vihar, Bhubaneswar",
        Email: "ashis.mahapatra@gmail.com",
        ContactNo: "9439392845",
        PublishedDate: "27-02-1991",
        Disponability: "28-03-2019"
      });
      this.publishedJobResult.push({
        Name: "Ashis Mahapatra",
        Image: "assets/imgs/publishedjob/user.svg",
        Age: 32,
        Experience: 4,
        Rating: 4,
        RequestType: "Agency",
        Location: "Kailash vihar, Bhubaneswar",
        Email: "ashis.mahapatra@gmail.com",
        ContactNo: "9439392845",
        PublishedDate: "27-02-1991",
        Disponability: "28-03-2019"
      });
    //}
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
    console.log('ionViewDidLoad JobrequestsPage');
  }
  gotoCreate(){
    this.navCtrl.push("CreateJobRequestForm");
  }
  gotoDetails(){
  
    this.navCtrl.push("PublishedJobDesc");
  }
}
