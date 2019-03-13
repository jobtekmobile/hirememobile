import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, ActionSheetController, Events } from 'ionic-angular';
import { CommonServices } from '../../providers/common.service';
import { DataContext } from '../../providers/dataContext.service';
import * as $ from 'jquery';
import { Camera, CameraOptions } from '@ionic-native/camera';
import moment from 'moment';
import { File } from '@ionic-native/file';
import { ChangeDetectorRef } from '@angular/core';
import { EnLanguageServices } from '../../providers/enlanguage.service';
import { FrLanguageServices } from '../../providers/frlanguage.service';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
  providers: [Camera, File]
})
export class RegisterPage {
  @ViewChild('registerSlider') slider: Slides;

  registerObj = new Register();
  cities: any = [];
  districts: any = [];
  countries: any = [];
  slideACtiveIndex: number = 0;
  securityQuestions: any = [];
  maxDate: string;
  images: any = [
    { id: 0, image: "", file: "", fileName: "" },
    { id: 1, image: "", file: "", fileName: "" },
    { id: 2, image: "", file: "", fileName: "" },
  ];
  labelList:any = [];
  constructor(public events: Events,private cdr: ChangeDetectorRef,private file: File, public actionSheetCtrl: ActionSheetController, private camera: Camera, public navCtrl: NavController, public navParams: NavParams, public _dataContext: DataContext, private commonService: CommonServices,
    private enLanguageServices:EnLanguageServices,
    private frLanguageServices:FrLanguageServices) {

      // this.events.subscribe('user1:languagechanged', (language, time) => {
      //   if (language == "en") {
      //     this.labelList = enLanguageServices.getLabelLists();
      //   } else {
      //     this.labelList = frLanguageServices.getLabelLists();
      //   }
      // });
  }

  ionViewDidLoad() {
    this.commonService.getStoreDataFromCache(this.commonService.getCacheKeyUrl("getLanguageSelected"))
    .then((result) => {
      if (result && result.language) {
        if (result.language == "en") {
          this.labelList = this.enLanguageServices.getLabelLists();
        } else {
          this.labelList = this.frLanguageServices.getLabelLists();
        }
        
      }
    });
    this.maxDate = moment().format("YYYY-MM-DDTHH:mm:ss.SSS[Z]");
    this.getCountries();
    console.log('ionViewDidLoad RegisterPage');
  }
  gotoDashboard() {
    this.navCtrl.setRoot("DashboardPage");
  }
  gotoLogin() {
    this.navCtrl.setRoot("LoginPage");
  }
  slideChanged() {
    this.slideACtiveIndex = this.slider.getActiveIndex();
  }
  register() {
    if (this.validateFirstSlide() && this.validateSecondSlide()) {
      this.registerObj.profile_pic_base64 = this.images[0].file.substr(this.images[0].file.indexOf(',') + 1, this.images[0].file.length);
      this.registerObj.id_proof_base64 = this.images[0].file.substr(this.images[1].file.indexOf(',') + 1, this.images[1].file.length);
      this.registerObj.id_proof_back_base64 = this.images[0].file.substr(this.images[2].file.indexOf(',') + 1, this.images[2].file.length);
      this._dataContext.RegisterUser(this.registerObj)
        .subscribe(response => {
          this.commonService.onMessageHandler(this.labelList.successmsg1, 1);
          this.navCtrl.setRoot("LoginPage");
        },
          error => {
            this.commonService.onMessageHandler(this.labelList.errormsg2, 0);
          });
    }
  }
  getCountries() {
    this._dataContext.getCountries()
      .subscribe(responnse => {
        if (responnse.length > 0) {
          this.countries = responnse;
          // this.getActiveDistricts();
        }
        else
          this.commonService.onMessageHandler(this.labelList.errormsg3, 0);
      },
        error => {
          this.commonService.onMessageHandler(this.labelList.errormsg3, 0);
        });
  }
  getActiveCities() {
    this._dataContext.GetActiveCities(this.registerObj.CountryId)
      .subscribe(responnse => {
        if (responnse.length > 0) {
          this.cities = responnse;
          // this.getActiveDistricts();
        }
        else
          this.commonService.onMessageHandler(this.labelList.errormsg4, 0);
      },
        error => {
          this.commonService.onMessageHandler(this.labelList.errormsg4, 0);
        });
  }
  onSelectedCity() {
    this.getActiveDistricts();
  }
  //validate only number
  onlyNumber(event) {
    return this.commonService.validateOnlyNumber(event);
  }
  getActiveDistricts() {
    this._dataContext.GetActiveDistricts(this.registerObj.CityId)
      .subscribe(responnse => {
        if (responnse.length > 0) {
          this.districts = responnse;
          this.getSecurityQuestions();
        }
        else
          this.commonService.onMessageHandler(this.labelList.errormsg5, 0);
      },
        error => {
          this.commonService.onMessageHandler(this.labelList.errormsg5, 0);
        });
  }
  continue() {
    if (this.validateFirstSlide()) {
      this.slider.slideNext();
      this.getSecurityQuestions();
    }


  }
  validateFirstSlide(): boolean {
    
    if (this.registerObj.UserRoles == undefined || this.registerObj.UserRoles == "0") {
      this.commonService.onMessageHandler(this.labelList.validmsg1, 0)
      return false;
    } else if (this.registerObj.Gender == undefined || this.registerObj.Gender == "") {
      this.commonService.onMessageHandler(this.labelList.validmsg2, 0)
      return false;
    } else if (this.registerObj.FirstName == undefined || this.registerObj.LastName == "") {
      this.commonService.onMessageHandler(this.labelList.validmsg3, 0)
      return false;
    } else if (this.registerObj.LastName == undefined || this.registerObj.LastName == "") {
      this.commonService.onMessageHandler(this.labelList.validmsg4, 0)
      return false;
    } else if (this.registerObj.DOB == undefined || this.registerObj.DOB == "") {
      this.commonService.onMessageHandler(this.labelList.validmsg5, 0)
      return false;
    } else if (this.registerObj.CountryId == undefined || this.registerObj.CountryId == null) {
      this.commonService.onMessageHandler(this.labelList.validmsg6, 0)
      return false;
    } else if (this.registerObj.CityId == undefined || this.registerObj.CityId == null) {
      this.commonService.onMessageHandler(this.labelList.validmsg7, 0)
      return false;
    } else if (this.registerObj.DistrictId == undefined || this.registerObj.DistrictId == null) {
      this.commonService.onMessageHandler(this.labelList.validmsg8, 0)
      return false;
    } else if (this.registerObj.Address == undefined || this.registerObj.Address == "") {
      this.commonService.onMessageHandler(this.labelList.validmsg9, 0)
      return false;
    } else if (this.registerObj.DOB == undefined || this.registerObj.DOB == "") {
      this.commonService.onMessageHandler(this.labelList.validmsg5, 0)
      return false;
    } else if (this.registerObj.Email == undefined || this.registerObj.Email == undefined) {
      this.commonService.onMessageHandler(this.labelList.validmsg10, 0)
      return false;
    } else if (this.registerObj.CountryCode == undefined || this.registerObj.CountryCode == null) {
      this.commonService.onMessageHandler(this.labelList.validmsg11, 0)
      return false;
    } else if (this.registerObj.PhoneNumber == undefined || this.registerObj.PhoneNumber == "") {
      this.commonService.onMessageHandler(this.labelList.validmsg12, 0)
      return false;
    } else {
      return true;
    }
  }
  validateSecondSlide() {
    if (this.registerObj.UserName == undefined || this.registerObj.UserName == "") {
      this.commonService.onMessageHandler(this.labelList.validmsg13, 0)
      return false;
    } else if (this.registerObj.Password == undefined || this.registerObj.Password == "") {
      this.commonService.onMessageHandler(this.labelList.validmsg14, 0)
      return false;
    } else if (this.registerObj.ConfirmPassword == undefined || this.registerObj.ConfirmPassword == "") {
      this.commonService.onMessageHandler(this.labelList.validmsg15, 0)
      return false;
    } else if (this.registerObj.ConfirmPassword != this.registerObj.Password) {
      this.commonService.onMessageHandler(this.labelList.validmsg16, 0)
      return false;
    } else if (this.registerObj.SecurityQuestionId == undefined || this.registerObj.SecurityQuestionId == null) {
      this.commonService.onMessageHandler(this.labelList.validmsg17, 0)
      return false;
    } else if (this.registerObj.SecurityQuestionAnswer == undefined || this.registerObj.SecurityQuestionAnswer == null) {
      this.commonService.onMessageHandler(this.labelList.validmsg18, 0)
      return false;
    } else {
      return true;
    }
  }
  uploadImage(data) {
    let actionSheet = this.actionSheetCtrl.create({
      title: this.labelList.label40,
      buttons: [
        {
          text: this.labelList.label41,
          icon: "ios-camera-outline",
          cssClass: 'icon-btn-color',
          handler: () => {
            this.chooseDocFromCamera(data);
          }
        },
        {
          text: this.labelList.label42,
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
            this.commonService.onMessageHandler(this.labelList.errormsg6, 0);
          }
        }
      })
    })
  }
  getSecurityQuestions() {
    this._dataContext.GetSecurityQuestions()
      .subscribe(responnse => {
        if (responnse.length > 0) {
          this.securityQuestions = responnse;
        }
        else
          this.commonService.onMessageHandler(this.labelList.errormsg7, 0);
      },
        error => {
          this.commonService.onMessageHandler(this.labelList.errormsg7, 0);
        });
  }
  gotoForgotPassword(){
    this.navCtrl.setRoot("ForgotpasswordPage");
  }
}
class Register {
  Gender: string;
  FirstName: string;
  LastName: string;
  DOB: string;
  CountryId: number;
  CityId: number;
  DistrictId: number;
  Address: string;
  Email: string;
  CountryCode: any = "+225";
  PhoneNumber: string;
  profile_pic: any;
  id_proof: any;
  id_proof_back: any;
  UserRoles: string;
  UserName: string;
  Password: string;
  ConfirmPassword: string;
  SecurityQuestionId: number;
  SecurityQuestionAnswer: string;
  AgreeTermsAndConditions: boolean;
  profile_pic_base64: string;
  id_proof_base64: string;
  id_proof_back_base64: string;
  
}