import { Component } from '@angular/core';
import { PopoverController, IonicPage, NavController, DateTime } from 'ionic-angular';
//import { PublishedJobModel } from '../../interfaces/publishedjob';
import { ModalController, ViewController } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-publishedjob',
  templateUrl: 'publishedjob.html'
})
export class PublishedJob {
  tabValue: number;
  isAvailable: boolean = true;
  publishedJobResult: any = [];
  constructor(public navCtrl: NavController,public modalCtrl: ModalController) {
    this.tabValue = 0;
    this.publishedJobResult = [];
    //this.tabValue = option;
    if (this.tabValue == 0) {
      this.publishedJobResult.push({
        Name: "Ashis",
        Image: "assets/imgs/publishedjob/user.svg",
        Age: 32,
        Experience: 4,
        Rating: 3,
        RequestType: "Alok",
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
        RequestType: "Alok",
        Location: "Kailash vihar, Bhubaneswar",
        Email: "ashis.mahapatra@gmail.com",
        ContactNo: "9439392845",
        PublishedDate: "27-02-1991",
        Disponability: "28-03-2019"
      });
    }
    else {
      this.publishedJobResult.push({
        Name: "Ashis Mahapatra",
        Image: "assets/imgs/publishedjob/user.svg",
        Age: 32,
        Experience: 4,
        Rating: 4,
        RequestType: "Alok",
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
        RequestType: "Alok",
        Location: "Kailash vihar, Bhubaneswar",
        Email: "ashis.mahapatra@gmail.com",
        ContactNo: "9439392845",
        PublishedDate: "27-02-1991",
        Disponability: "28-03-2019"
      });
    }
  }
  ionViewDidEnter() {
    this.tabValue = 0;
    this.getPublishedJob();
  }
  getPublishedJob() {

  }
  //While Tab change
  tabSelection(option) {
    this.publishedJobResult = [];
    this.tabValue = option;
    if (option == 0) {
      this.publishedJobResult.push({
        Name: "Ashis",
        Image: "assets/imgs/publishedjob/user.svg",
        Age: 32,
        Experience: 4,
        Rating: 3,
        RequestType: "Alok",
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
        RequestType: "Alok",
        Location: "Kailash vihar, Bhubaneswar",
        Email: "ashis.mahapatra@gmail.com",
        ContactNo: "9439392845",
        PublishedDate: "27-02-1991",
        Disponability: "28-03-2019"
      });
    }
    else {
      this.publishedJobResult.push({
        Name: "Ashis Mahapatra",
        Image: "assets/imgs/publishedjob/user.svg",
        Age: 32,
        Experience: 4,
        Rating: 4,
        RequestType: "Alok",
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
        RequestType: "Alok",
        Location: "Kailash vihar, Bhubaneswar",
        Email: "ashis.mahapatra@gmail.com",
        ContactNo: "9439392845",
        PublishedDate: "27-02-1991",
        Disponability: "28-03-2019"
      });
    }
  }

  openFilter(){
    let contactModal = this.modalCtrl.create("FilterPage");
    contactModal.present();
  }
}
