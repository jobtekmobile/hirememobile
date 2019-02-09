import { Component } from '@angular/core';
import { PopoverController, IonicPage, NavController, DateTime, NavParams } from 'ionic-angular';
import * as $ from 'jquery';
import moment from 'moment';
import { CommonServices } from '../../../providers/common.service';
import { DataContext } from '../../../providers/dataContext.service';
import { FormBuilder, Validators, FormControl, FormGroup, FormArray } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-createjobrequestform',
  templateUrl: 'createjobrequestform.html'
})
export class CreateJobRequestForm {
  cities: any = [];
  districts: any = [];
  createJobRequest: any = {
    Id: 0,
    CandidateId: 0,
    Gender: 2,
    JobId: 0,
    StaffType: 0,
    ExperienceInYears: "",
    ExperienceInMonths: "",
    CityId: 0,
    DistrictId: 0,
    SalaryType: 1,
    ExpectedMinSalary: "",
    ExpectedMaxSalary: "",
    CanRead: false,
    CanWrite: false,
    SleepOnSite: false,
    MaxGroupPeople: "",
    MinGroupPeople: "",
    Disponibility: "",
    JobTasks: []
  };
  showSelectedDate: string;
  showCurrentDate: string;
  defaultDate: Date;
  minDate: string;
  maxDate: string;
  jobTasks: any = [];
  loggedInUserDetails: any = {};
  constructor(
    public navCtrl: NavController,
    public _dataContext: DataContext,
    private commonService: CommonServices,
    public formBuilder: FormBuilder,
    public navParam: NavParams,
  ) {

    // this.createJobRequest = new FormGroup({
    //   Gender: new FormControl(2),
    //   CityId: new FormControl(0),
    //   DistrictId: new FormControl(0),
    //   StaffType: new FormControl(0),
    //   CanWrite: new FormControl(false),
    //   CanRead: new FormControl(false),
    //   showSelectedDate: new FormControl(''),
    //   Submit: new FormControl(''),
    //   SleepOnSite: new FormControl(false),
    //   SalaryType: new FormControl(1),
    //   MaxGroupPeople: new FormControl('', Validators.required),
    //   MinGroupPeople: new FormControl('', Validators.required),
    //   ExpectedMinSalary: new FormControl('', Validators.required),
    //   ExpectedMaxSalary: new FormControl('', Validators.required),
    //   ExperienceInYears: new FormControl('', Validators.required),
    //   ExperienceInMonths: new FormControl('', Validators.required),
    //   JobTasks: new FormControl([]),
    //   jobTasks: new FormArray([
    //     new FormControl('')
    //   ]),

    //   // CityId: new FormControl(0, Validators.required),
    //   // DistrictId: new FormControl(0, Validators.required)
    // });
    this.createJobRequest.JobId = this.navParam.get("jobId");
    this.createJobRequest.CityId = 0;
    this.createJobRequest.DistrictId = 0;
    this.createJobRequest.Gender = 2;
    this.createJobRequest.StaffType = 0;
    this.createJobRequest.SalaryType = 1;
  }
  ionViewWillEnter() {
    this.getLoggedInUserDetailsFromCache();
    this.showSelectedDate = moment().format("YYYY-MM-DDTHH:mm:ss.SSS[Z]");
    this.minDate = "1900-12-31";
    this.maxDate = moment().format("YYYY-MM-DDTHH:mm:ss.SSS[Z]");
  }

  //Get logged in user details from cache.
  getLoggedInUserDetailsFromCache() {
    this.loggedInUserDetails = JSON.parse(localStorage.getItem("loggedInUserCredential"));
    this.createJobRequest.CandidateId = this.loggedInUserDetails.userId;
    this.getActiveCities();
    this.getActiveJobTasks();
  }
  getActiveJobTasks() {
    this._dataContext.GetJobTasks(this.createJobRequest.JobId)
      .subscribe(responnse => {
        if (responnse.JobTasks.length > 0) {
          this.jobTasks = responnse.JobTasks;
        }
        else
          this.commonService.onMessageHandler("Failed to retrieve job tasks.", 0);
      },
        error => {
          this.commonService.onMessageHandler("Failed to retrieve job tasks. Please try again", 0);
        });
  }
  getActiveCities() {
    this._dataContext.GetActiveCities(0)
      .subscribe(responnse => {
        if (responnse.length > 0) {
          this.cities = responnse;
          // this.getActiveDistricts();
        }
        else
          this.commonService.onMessageHandler("Failed to retrieve cities.", 0);
      },
        error => {
          this.commonService.onMessageHandler("Failed to retrieve cities. Please try again", 0);
        });
  }
  onSelectedCity() {
    this.getActiveDistricts();
  }
  getActiveDistricts() {
    this._dataContext.GetActiveDistricts(this.createJobRequest.CityId)
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
  //validate only number
  onlyNumber(event) {
    return this.commonService.validateOnlyNumber(event);
  }
  onSelectedDate() {
    this.createJobRequest.Disponibility = moment(this.showSelectedDate).format("DD-MMM-YYYY");
  }
  //Create Job Request
  onCreateJobRequest() {
    this.createJobRequest.JobTasks = [];
    this.jobTasks.forEach(element => {
      if (element.Selected)
        this.createJobRequest.JobTasks.push({
          JobTaskId: element.JobTaskId,
          Selected: true,
          Note: "Sample task note"
        });
    });
    this._dataContext.CreateNewJobRequest(this.createJobRequest)
      .subscribe(responnse => {
        if (responnse) {
          this.commonService.onMessageHandler("", 1);
        }
        else
          this.commonService.onMessageHandler("Failed to save.", 0);
      },
        error => {
          this.commonService.onMessageHandler("Failed to save. Please try again", 0);
        });
  }
}
