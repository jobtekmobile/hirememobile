import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, ActionSheetController } from 'ionic-angular';
import { CommonServices } from '../../../providers/common.service';
import { DataContext } from '../../../providers/dataContext.service';
import { Camera, CameraOptions } from '@ionic-native/camera';
import moment from 'moment';
/**
 * Generated class for the AgencyregistercandidatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agencyregistercandidate',
  templateUrl: 'agencyregistercandidate.html',
  providers: [Camera]
})
export class AgencyregistercandidatePage {
  @ViewChild('registercandidate') slider: Slides;
  cities: any = [];
  districts: any = [];
  countries: any = [];
  selectedCountry: any = "";
  selectedCity: any = "";
  selectedDistrict: any = "";
  maxDate: string;
  registerObj = new Register();
  userDetails: any = {};
  images: any = [
    { id: 0, image: "", file: "" },
    { id: 1, image: "", file: "" },
    { id: 2, image: "", file: "" },
  ];
  constructor(public actionSheetCtrl: ActionSheetController, private camera: Camera, public navCtrl: NavController, public navParams: NavParams, public _dataContext: DataContext, private commonService: CommonServices) {
  }

  ionViewDidLoad() {
    this.getLoggedInUserDetailsFromCache()
    this.maxDate = moment().format("YYYY-MM-DDTHH:mm:ss.SSS[Z]");
    this.getCountries()
  }
  getLoggedInUserDetailsFromCache() {
    //this.loggedInUserDetails = JSON.parse(localStorage.getItem("loggedInUserCredential"));;
    this.commonService.getStoreDataFromCache(this.commonService.getCacheKeyUrl("getLoggedInUserDetails"))
      .then((result) => {
        if (result && result.userId) {
          this.userDetails = result;
        }
        else {
          this.navCtrl.setRoot("LoginPage");
        }
      });
  }
  continue() {
    if (this.validateFirstSlide()) {
      this.slider.slideNext();
    }
  }
  back() {
    this.slider.slidePrev();
  }
  onRegister() {
    if (this.validateFirstSlide() && this.validateSecondSlide()) {
      this.registerObj.profile_pic_base64 = this.images[0].file.substr(this.images[0].file.indexOf(',') + 1);
      this.registerObj.id_proof_base64 = this.images[0].file.substr(this.images[1].file.indexOf(',') + 1);
      this.registerObj.id_proof1_base64 = this.images[0].file.substr(this.images[2].file.indexOf(',') + 1);
      this._dataContext.RegisterCandidateByAgency(this.userDetails.userId, this.registerObj)
        .subscribe(response => {
          if (response.Status == "OK") {
            this.registerObj = new Register();
            this.commonService.onMessageHandler("Successfully registered", 1);
            this.slider.slidePrev();
          }
          else
            this.commonService.onMessageHandler("Failed to register.", 0);
        },
          error => {
            this.commonService.onMessageHandler("Failed to register. Please try again", 0);
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
          this.commonService.onMessageHandler("Failed to retrieve cities.", 0);
      },
        error => {
          this.commonService.onMessageHandler("Failed to retrieve cities. Please try again", 0);
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
    this._dataContext.GetActiveDistricts(this.registerObj.CityId)
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
  validateFirstSlide(): boolean {
    if (this.registerObj.Gender == undefined || this.registerObj.Gender == "") {
      this.commonService.onMessageHandler("Select Gender", 0)
      return false;
    } else if (this.registerObj.FirstName == undefined || this.registerObj.LastName == "") {
      this.commonService.onMessageHandler("Select FirstName", 0)
      return false;
    } else if (this.registerObj.LastName == undefined || this.registerObj.LastName == "") {
      this.commonService.onMessageHandler("Select LastName", 0)
      return false;
    } else if (this.registerObj.DOB == undefined || this.registerObj.DOB == "") {
      this.commonService.onMessageHandler("Select DOB", 0)
      return false;
    } else if (this.registerObj.CountryId == undefined || this.registerObj.CountryId == null || this.registerObj.CountryId == 0) {
      this.commonService.onMessageHandler("Select Country", 0)
      return false;
    } else if (this.registerObj.CityId == undefined || this.registerObj.CityId == null || this.registerObj.CityId == 0) {
      this.commonService.onMessageHandler("Select City", 0)
      return false;
    } else if (this.registerObj.DistrictId == undefined || this.registerObj.DistrictId == null || this.registerObj.DistrictId == 0) {
      this.commonService.onMessageHandler("Select District", 0)
      return false;
    } else if (this.registerObj.Address == undefined || this.registerObj.Address == "") {
      this.commonService.onMessageHandler("Select Address", 0)
      return false;
    } else {
      return true;
    }
  }
  validateSecondSlide() {
    if (this.registerObj.Email == undefined || this.registerObj.Email == "") {
      this.commonService.onMessageHandler("Select Email", 0)
      return false;
    } else if (this.registerObj.CountryCode == undefined || this.registerObj.CountryCode == null) {
      this.commonService.onMessageHandler("Select CountryCode", 0)
      return false;
    } else if (this.registerObj.PhoneNumber == undefined || this.registerObj.PhoneNumber == "") {
      this.commonService.onMessageHandler("Select PhoneNumber", 0)
      return false;
    }
    // else if (this.registerObj.Password == undefined || this.registerObj.Password == "") {
    //   this.commonService.onMessageHandler("Select Password", 0)
    //   return false;
    // } else if (this.registerObj.ConfirmPassword == undefined || this.registerObj.ConfirmPassword == "") {
    //   this.commonService.onMessageHandler("Select ConfirmPassword", 0)
    //   return false;
    // } 
    // else if (this.registerObj.ConfirmPassword != this.registerObj.Password) {
    //   this.commonService.onMessageHandler("confirm password does not match", 0)
    //   return false;
    // } 
    else {
      return true;
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
          }
          else {
            this.commonService.onMessageHandler("Sorry! you can upload only .png, .jpg, .jpeg files only.", 0);
          }
        }
      })
    })
  }
  //validate only number
  onlyNumber(event) {
    return this.commonService.validateOnlyNumber(event);
  }
}

class Register {
  Gender: string = "";
  FirstName: string = "";
  LastName: string = "";
  DOB: string = "";
  CountryId: number = 0;
  CityId: number = 0;
  DistrictId: number = 0;
  Address: string = "";
  Email: string = "";
  CountryCode: any = "+225";
  PhoneNumber: string = "";
  profile_pic: any = "";
  id_proof: any = "";
  id_proof_back: any = "";
  UserRoles: string = "Candidate";
  UserName: string = "";
  Password: string = "";
  ConfirmPassword: string = "";
  SecurityQuestionId: number = 0;
  SecurityQuestionAnswer: string = "";
  AgreeTermsAndConditions: boolean = false;
  profile_pic_base64: string = "";
  id_proof_base64: string = "";
  id_proof1_base64: string = "";

}