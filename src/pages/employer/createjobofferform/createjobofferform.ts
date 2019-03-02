import { Component, ChangeDetectorRef } from '@angular/core';
import { PopoverController, IonicPage, NavController, DateTime, NavParams, ActionSheetController } from 'ionic-angular';
import * as $ from 'jquery';
import moment from 'moment';
import { CommonServices } from '../../../providers/common.service';
import { DataContext } from '../../../providers/dataContext.service';
import { FormBuilder, Validators, FormControl, FormGroup, FormArray } from '@angular/forms';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { File } from '@ionic-native/file';

@IonicPage()
@Component({
  selector: 'page-createjobofferform',
  templateUrl: 'createjobofferform.html',
  providers: [Camera, File]
})
export class CreateJobOfferForm {
  cities: any = [];
  districts: any = [];
  jobCriteria: any = {
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
    MinAge:"",
    MaxAge:"",
    AdditionalDescription:"",
    JobTasks: [],
    JobResponseSkillPic1Base64: "",
    JobResponseSkillPic2Base64: "",
    JobResponseSkillPic3Base64: ""
  };
  images: any = [
    { id: 0, image: "", file: "" },
    { id: 1, image: "", file: "" },
    { id: 2, image: "", file: "" },
  ];
  jobTasks: any = [];
  showSelectedDate: string;
  showCurrentDate: string;
  defaultDate: Date;
  minDate: string;
  maxDate: string;
  loggedInUserDetails:any={};
  constructor(
    public navCtrl: NavController,
    public _dataContext: DataContext,
    private commonService: CommonServices,
    public formBuilder: FormBuilder,
    public navParam: NavParams,
    public actionSheetCtrl: ActionSheetController,
    private camera: Camera,
    private cdr: ChangeDetectorRef, 
    private file: File
  ) {
    this.jobCriteria.JobId = this.navParam.get("jobId");
    this.jobCriteria.CityId = 0;
    this.jobCriteria.DistrictId = 0;
    this.jobCriteria.Gender = 2;
    this.jobCriteria.StaffType = 0;
    this.jobCriteria.SalaryType = 1;
  }
  ionViewWillEnter() {
    this.getLoggedInUserDetailsFromCache();
    this.showSelectedDate = moment().format("YYYY-MM-DDTHH:mm:ss.SSS[Z]");
    this.minDate = "1900-12-31";
    this.maxDate = moment().format("YYYY-MM-DDTHH:mm:ss.SSS[Z]");
  }

  //Get logged in user details from cache.
  getLoggedInUserDetailsFromCache() {
    // this.loggedInUserDetails = JSON.parse(localStorage.getItem("loggedInUserCredential"));
    // this.jobCriteria.CandidateId = this.loggedInUserDetails.userId;
    // this.getActiveCities();
    // this.getActiveJobTasks();

    this.commonService.getStoreDataFromCache(this.commonService.getCacheKeyUrl("getLoggedInUserDetails"))
    .then((result) => {
      if (result && result.userId) {
        this.loggedInUserDetails = result;

        this.jobCriteria.CandidateId = this.loggedInUserDetails.userId;
        this.getActiveCities();
        this.getActiveJobTasks();
        
      }
      else {
        this.navCtrl.setRoot("LoginPage");
      }
    });
  }
  getActiveJobTasks() {
    this._dataContext.GetJobTasks(this.jobCriteria.JobId)
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
    this._dataContext.GetActiveDistricts(this.jobCriteria.CityId)
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
    this.jobCriteria.Disponibility = moment(this.showSelectedDate).format("DD-MMM-YYYY");
  }
  //Create Job Response
  onCreateJobResponse() {
    if (this.validateJobResponseForm()) {
      this.jobCriteria.JobTasks = this.jobTasks;
      // this.jobCriteria.JobRequestSkillPic1Base64 = this.images[0].file.substr(this.images[0].file.indexOf(',') + 1, this.images[0].file.length);
      // this.jobCriteria.JobRequestSkillPic2Base64 = this.images[1].file.substr(this.images[1].file.indexOf(',') + 1, this.images[1].file.length);
      // this.jobCriteria.JobRequestSkillPic3Base64 = this.images[2].file.substr(this.images[2].file.indexOf(',') + 1, this.images[2].file.length);
      this._dataContext.CreateNewJobResponse(this.jobCriteria)
        .subscribe(responnse => {
          if (responnse.Status == "OK") {
            this.commonService.onMessageHandler(responnse.Message, 1);
            this.jobCriteria={};
            this.jobCriteria.CityId = 0;
            this.jobCriteria.DistrictId = 0;
            this.jobCriteria.Gender = 2;
            this.jobCriteria.StaffType = 0;
            this.jobCriteria.SalaryType = 1;
            this.navCtrl.setRoot("EployerJobOffer");
          }
          else
            this.commonService.onMessageHandler("Failed to save.", 0);
        },
          error => {
            this.commonService.onMessageHandler("Failed to save. Please try again", 0);
          });
    }
  }

  uploadImage(data) {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Choose File',
      buttons: [
        {
          text: 'Camera',
          icon: "ios-camera-outline",
          cssClass: 'icon-btn-color',
          handler: () => {
            this.chooseDocFromCamera(data);
          }
        },
        {
          text: 'Gallery',
          icon: "ios-image-outline",
          handler: () => {
            this.chooseFromGallery(data);
          }
        }
      ]
    });
    actionSheet.present();
  }
  chooseDocFromCamera(value) {
    var imageList: any = [];
    const cameraOptions: CameraOptions = {
      quality: 50, // picture quality
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit: true,
      correctOrientation: true,
      //targetWidth: 500,
      // targetHeight: 500
    }
    this.camera.getPicture(cameraOptions).then((imageData) => {
      this.readimage(imageData, value);
    });
    //this.uploadedDocument.push({ 'File': "data:image/png;base64,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", DocumentType: value == "report" ? this.report : this.prescription, 'FileName': "user.jpg", 'FileExtension': ".jpg", "Size": "30KB" });
  }
  //Get picture from Gallery
  chooseFromGallery(value) {
    const cameraOptions: CameraOptions = {
      quality: 50, // picture quality
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit: true,
      correctOrientation: true,
      // targetWidth: 1000,
      // targetHeight: 1000
    }
    this.camera.getPicture(cameraOptions).then((imageData) => {
      this.readimage(imageData, value);
    });
  }
  readimage(path, value) {
    (<any>window).resolveLocalFileSystemURL(path, (res) => {
      res.file((resFile) => {
        var reader = new FileReader();
        reader.readAsDataURL(resFile);
        reader.onloadend = (evt: any) => {
          if (resFile.type.indexOf("jpg") >= 0 || resFile.type.indexOf("jpeg") >= 0 || resFile.type.indexOf("png") >= 0) {
            this.images.forEach(element => {
              if (element.id == value.id) {
                element.file = reader.result;
              }
            });
            this.cdr.detectChanges();
          }
          else {
            this.commonService.onMessageHandler("Sorry! you can upload only .png, .jpg, .jpeg files only.", 0);
          }
        }
      })
    })
  }
  validateJobResponseForm() {
    if (this.jobCriteria.MinAge == undefined || this.jobCriteria.MinAge == "") {
      this.commonService.onMessageHandler("Minimum age is required", 0)
      return false;
    }
    else if (this.jobCriteria.MaxAge == undefined || this.jobCriteria.MaxAge == "") {
      this.commonService.onMessageHandler("Max age is required.", 0)
      return false;
    }
    else if (this.jobCriteria.ExperienceInYears == undefined || this.jobCriteria.ExperienceInYears == "") {
      this.commonService.onMessageHandler("Year of exp. is required", 0)
      return false;
    }
    else if (this.jobCriteria.CityId == undefined || this.jobCriteria.CityId == "" || this.jobCriteria.CityId == 0) {
      this.commonService.onMessageHandler("City is required.", 0)
      return false;
    }
    else if (this.jobCriteria.DistrictId == undefined || this.jobCriteria.DistrictId == "" || this.jobCriteria.DistrictId == 0) {
      this.commonService.onMessageHandler("District is required.", 0)
      return false;
    } else if (this.jobCriteria.ExpectedMinSalary == undefined || this.jobCriteria.ExpectedMinSalary == "") {
      this.commonService.onMessageHandler("Min salary is required.", 0)
      return false;
    } else if (this.jobCriteria.ExpectedMaxSalary == undefined || this.jobCriteria.ExpectedMaxSalary == "") {
      this.commonService.onMessageHandler("Max salary is required.", 0)
      return false
    } else {
      return true;
    }
  }
}
