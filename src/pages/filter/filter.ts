import { Platform, NavParams, IonicPage } from 'ionic-angular';
import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { CommonServices } from '../../providers/common.service';
import { DataContext } from '../../providers/dataContext.service';

@IonicPage()
@Component({
  selector: 'page-filter',
  templateUrl: 'filter.html'
})
export class FilterPage {

  specificCrieteria: any = {
    IsGenderActive: false,
    Gender: "",
    IsProfileVerifiedActive: false,
    ProfileVerified: "",
    IsAgeFilterActive: false,
    MinAge: "",
    MaxAge: "",
    IsExperienceFilterActive: false,
    MinYearsOfExperience: "",
    MaxYearsOfExperience: "",
    IsStaffTypeFilterActive: false,
    StaffType: "",
    IsDisponibilityFilterActive: false,
    Disponibility: "",
    IsLocalizationFilterActive: false,
    City: "",
    District: "",
    IsSalaryFilterActive: false,
    MinSalary: "",
    MaxSalary: "",
    Job: 1,
    Tasks: ""
  };
  cities: any = [];
  districts: any = [];
  minAge: any = [];
  maxAge: any = [];
  experiences: any = [];
  activeTab: number = 0;
  jobTasks: any = [];
  constructor(
    public platform: Platform,
    public navParam: NavParams,
    public viewCtrl: ViewController,
    public _dataContext: DataContext,
    public navParams: NavParams,
    private commonService: CommonServices,
  ) {
    this.getActiveJobTasks();
    this.getMinAge();
    this.getMaxAge();
    this.getexperiences();
    this.getActiveCities();
  }
  ionViewDidEnter() {
    this.activeTab = this.navParam.get("activeTab");
  }
  getexperiences() {
    this.experiences = [];
    for (var i = 1; i <= 20; i++) {
      this.experiences.push({ value: i, label: i });
    }
  }
  getMinAge() {
    this.minAge = [];
    for (var i = 16; i <= 50; i++) {
      this.minAge.push({ value: i, label: i });
    }
  }
  getMaxAge() {
    this.maxAge = [];
    for (var i = 16; i <= 50; i++) {
      this.minAge.push({ value: i, label: i });
    }
  }
  getActiveCities() {
    this._dataContext.GetActiveCities(0)
      .subscribe(responnse => {
        if (responnse.length > 0) {
          this.cities = responnse;
          //this.getActiveDistricts();
        }
        else
          this.commonService.onMessageHandler("Failed to retrieve cities.", 0);
      },
        error => {
          this.commonService.onMessageHandler("Failed to retrieve cities. Please try again", 0);
        });
  }

  getActiveDistricts() {
    this._dataContext.GetActiveDistricts(this.cities[0].CityId)
      .subscribe(responnse => {
        if (responnse.length > 0) {
          this.districts = responnse;
        }
        else
          this.commonService.onMessageHandler("Failed to retrieve districts.", 0);
      },
        error => {
          this.commonService.onMessageHandler("Failed to retrieve districts. Please try again", 0);
        });
  }
  onToggleChange(value) {
    switch (value) {
      case "Gender":
        if (!this.specificCrieteria.IsGenderActive) {
          this.specificCrieteria.Gender = "";
        }
        break;
      case "ProfileVerified":
        if (!this.specificCrieteria.IsProfileVerifiedActive) {
          this.specificCrieteria.ProfileVerified = "";

        }
        break;
      case "StaffType":
        if (!this.specificCrieteria.IsStaffTypeFilterActive) {
          this.specificCrieteria.StaffType = "";
        }
        break;
      case "Date":
        if (!this.specificCrieteria.IsDisponibilityFilterActive) {
          this.specificCrieteria.Disponibility = "";
        }
        break;
      case "Age":
        if (!this.specificCrieteria.IsAgeFilterActive) {
          this.specificCrieteria.MinAge = "";
          this.specificCrieteria.MaxAge = "";
        }
        break;
      case "Experience":
        if (!this.specificCrieteria.IsExperienceFilterActive) {
          this.specificCrieteria.MinYearsOfExperience = "";
          this.specificCrieteria.MaxYearsOfExperience = "";
        }
        break;
      case "Localization":
        if (!this.specificCrieteria.IsLocalizationFilterActive) {
          this.specificCrieteria.City = "";
          this.specificCrieteria.District = "";
        }
        break;
      case "Salary":
        if (!this.specificCrieteria.IsSalaryFilterActive) {
          this.specificCrieteria.MinSalary = "";
          this.specificCrieteria.MaxSalary = "";
        }
        break;
      default:
        break;
    }
  }
  //validate only number
  onlyNumber(event) {
    return this.commonService.validateOnlyNumber(event);
  }
  closeModal() {
    this.viewCtrl.dismiss(false);
  }
  onSelectedCity() {
    this.getActiveDistricts();
  }
  onFilterSearch() {
    let url = "?Job=" + this.specificCrieteria.Job;
    for (var property in this.specificCrieteria) {
      if (this.specificCrieteria.hasOwnProperty(property)) {
        console.log(property, ' ', this.specificCrieteria[property]);
        if (property != "Job" && this.specificCrieteria[property] != "") {
          url = url + "&" + property + "=" + this.specificCrieteria[property];
        }
      }
    }
    this.jobTasks.forEach(element => {
      if (element.Selected)
        url = url + "&Tasks=" + element.JobTaskId;
    });
    if (this.activeTab == 0) {
      this._dataContext.GetSearchPublishedJobRequest(url)
        .subscribe(response => {
          this.viewCtrl.dismiss(response);
        },
          error => {
            this.commonService.onMessageHandler("Failed to retrieve cities. Please try again", 0);
          });
    }
    else {
      this._dataContext.GetSearchPublishedJobOffer(url)
        .subscribe(response => {
          this.viewCtrl.dismiss(response);
        },
          error => {
            this.commonService.onMessageHandler("Failed to retrieve cities. Please try again", 0);
          });
    }

  }
  getActiveJobTasks() {
    this._dataContext.GetJobTasks(this.specificCrieteria.Job)
      .subscribe(response => {
        if (response.JobTasks.length > 0) {
          this.jobTasks = response.JobTasks;
        }
        else
          this.commonService.onMessageHandler("Failed to retrieve job tasks.", 0);
      },
        error => {
          this.commonService.onMessageHandler("Failed to retrieve job tasks. Please try again", 0);
        });
  }
}


import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'jobTaskPipe' })
export class JobTaskPipe1 implements PipeTransform {
  transform(elements: any[]) {
    return elements.filter(hero => !hero.ParentJobTaskId);
  }
}


