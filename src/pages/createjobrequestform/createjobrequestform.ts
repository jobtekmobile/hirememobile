import { Component } from '@angular/core';
import { PopoverController, IonicPage, NavController, DateTime } from 'ionic-angular';
import * as $ from 'jquery';
import moment from 'moment';

@IonicPage()
@Component({
  selector: 'page-createjobrequestform',
  templateUrl: 'createjobrequestform.html'
})
export class CreateJobRequestForm {
  cities: any = [];
  districts: any = [];
  jobCriteria: any = {
    Gender: 0,
    Staff: 0,
    MinAge: "",
    MaxAge: "",
    MinExp: 0,
    City: 0,
    District: 0,
    SalaryPropose: 1,
    MinSalary: "",
    MaxSalary: "",
    isRead: false,
    isWrite: false,
    isSleep: false,
    Adult: "",
    Children: "",
    ServiceStartDate: ""
  };
  showSelectedDate: string;
  showCurrentDate: string;
  defaultDate: Date;
  minDate: string;
  maxDate: string;
  jobs: any = [
    {
      JobName: "Cooking",
      JobImage: "assets/imgs/createJobReq/study.svg",
      JobTypes: [
        {
          JobTypeName: "African Food",
          JobTypeImage: "assets/imgs/createJobReq/study.svg",
          JobSubTypes: [
            {
              JobSubTypeName: "Sauces",
              JobSubTypeImage: "assets/imgs/createJobReq/study.svg",
            },
            {
              JobSubTypeName: "Grilling",
              JobSubTypeImage: "assets/imgs/createJobReq/study.svg",
            }
          ]
        },
        {
          JobTypeName: "Indian Food",
          JobTypeImage: "assets/imgs/createJobReq/study.svg",
          JobSubTypes: [
            {
              JobSubTypeName: "Biryani",
              JobSubTypeImage: "assets/imgs/createJobReq/study.svg",
            },
            {
              JobSubTypeName: "Chicken Kassa",
              JobSubTypeImage: "assets/imgs/createJobReq/study.svg",
            }
          ]
        }
      ]
    },
    {
      JobName: "Painting",
      JobImage: "assets/imgs/createJobReq/study.svg",
      JobTypes: [
        {
          JobTypeName: "African Food",
          JobTypeImage: "assets/imgs/createJobReq/study.svg",
          JobSubTypes: [
            {
              JobSubTypeName: "Sauces",
              JobSubTypeImage: "assets/imgs/createJobReq/study.svg",
            },
            {
              JobSubTypeName: "Grilling",
              JobSubTypeImage: "assets/imgs/createJobReq/study.svg",
            }
          ]
        },
        {
          JobTypeName: "Indian Food",
          JobTypeImage: "assets/imgs/createJobReq/study.svg",
          JobSubTypes: [
            {
              JobSubTypeName: "Biryani",
              JobSubTypeImage: "assets/imgs/createJobReq/study.svg",
            },
            {
              JobSubTypeName: "Chicken Kassa",
              JobSubTypeImage: "assets/imgs/createJobReq/study.svg",
            }
          ]
        }
      ]
    }
  ];
  constructor(public navCtrl: NavController) {
  }
  ionViewDidEnter() {
    this.showSelectedDate = moment().format("YYYY-MM-DDTHH:mm:ss.SSS[Z]");
    this.minDate = "1900-12-31";
    this.maxDate = moment().format("YYYY-MM-DDTHH:mm:ss.SSS[Z]");
    this.cities.push({ Key: 0, Value: "Bhubaneswar" }, { Key: 1, Value: "Cuttack" }, { Key: 2, Value: "Balugaon" }, { Key: 3, Value: "Khurda" });
    this.districts.push({ Key: 0, Value: "Item1" }, { Key: 1, Value: "Item2" }, { Key: 2, Value: "Item3" }, { Key: 3, Value: "Item4" });
  }
  //validate only number
  onlyNumber(event) {
    return this.validateOnlyNumber(event);
  }
  validateOnlyNumber(event) {
    if (event.which == 8 || event.keyCode == 37 || event.keyCode == 39 || event.keyCode == 46)
      return true;
    else if ((event.which != 46 || $(this).val().toString().indexOf('.') != -1) && (event.which < 48 || event.which > 57))
      event.preventDefault();
  }
  onSelectedDate() {
    this.defaultDate = new Date(this.showSelectedDate);
  }
}
