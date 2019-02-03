import { Component } from '@angular/core';
import { PopoverController, IonicPage, NavController, DateTime } from 'ionic-angular';
import { PublishedJobDescModel } from '../../interfaces/publishedjob';

@IonicPage()
@Component({
  selector: 'page-publishedjobdesc',
  templateUrl: 'publishedjobdesc.html'
})
export class PublishedJobDesc {
  isAvailable: boolean = true;
  publishedJobDesc: PublishedJobDescModel = {
    Name: "",
    Rating: 0,
    RequestType: "",
    Location: "",
    Email: "",
    ContactNo: "",
    PublishedDate: "",
    Description: "",
    Gender: "",
    Image:"",
    StaffType: "",
    Age: "",
    Experience: 0,
    Skill: [],
    IsRead: true,
    AddtionalDesc:"",
    IsWrite:false,
    Sleep:0,
    Disponibility:"",
    Adults:0,
    Children:0,
    Localization:"",
    MinSalary:0,
    MaxSalary:0,
  };
  constructor(public navCtrl: NavController) {
    this.publishedJobDesc = {
      Name: "Ashis Mahapatra",
      Image:"assets/imgs/publishedjob/user.svg",
      Rating: 4,
      RequestType: "Test",
      Location: "Kailash Vihar, Bhubaneswar",
      Email: "ashis.mahapaytra@gmail.com",
      ContactNo: "9439392845",
      PublishedDate: "27-02-1992",
      Description: "This is a dummy message.",
      Gender: "Male",
      StaffType: "Independent",
      Age: "30",
      Experience: 2,
      Skill: ["Cleaning","Laundry"],
      IsRead: true,
      AddtionalDesc:"This is a dummy message.",
      IsWrite:false,
      Sleep:3,
      Disponibility:"20-02-1991",
      Adults:4,
      Children:8,
      Localization:"Bhubaneswar",
      MinSalary:20000,
      MaxSalary:60000,

    }
  }
  ionViewDidEnter() {
    this.getPublishedJobDesc();
  }
  getPublishedJobDesc() {

  }

}
