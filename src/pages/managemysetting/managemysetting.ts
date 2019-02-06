import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ImageViewerController } from 'ionic-img-viewer';
import { DataContext } from '../../providers/dataContext.service';
import { CommonServices } from '../../providers/common.service';
/**
 * Generated class for the ManagemysettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-managemysetting',
  templateUrl: 'managemysetting.html',
})
export class ManagemysettingPage {
  _imageViewerCtrl: ImageViewerController;

  userDetails: any = {};
  countries: any = [];
  cities = [];
  districts = [];
  selectedCity = "";
  selectedDistrict = "";
  selectedCountry: string = "";

  isEmailSelected = false;
  isPhoneSelected = false;

  constructor(public navCtrl: NavController, public _dataContext: DataContext, public navParams: NavParams, imageViewerCtrl: ImageViewerController,
    private commonService: CommonServices) {
    this._imageViewerCtrl = imageViewerCtrl;
    //const imageViewer = this._imageViewerCtrl.create(myImage);

    this.getProfileDetails();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ManagemysettingPage');
  }
  presentImage(myImage) {

    const imageViewer = this._imageViewerCtrl.create(myImage);
    imageViewer.present();

    // setTimeout(() => imageViewer.dismiss(), 1000);
    // imageViewer.onDidDismiss(() => alert('Viewer dismissed'));
  }
  changepassword() {
    this.navCtrl.push("ChangepasswordPage");
  }


  getProfileDetails() {
    this._dataContext.CandidateProfileById(1)
      .subscribe(response => {
        this.userDetails = response;
        console.log(this.userDetails);

        for (let i = 0; i < this.userDetails.ContactOption.length; i++) {
          
          switch (this.userDetails.ContactOption[i]) {
            case "Email":
              this.isEmailSelected = true;
              break;
            case "Phone":
              this.isPhoneSelected = true;
              break;
          }

        }




        if (this.userDetails.CountryId != undefined && this.userDetails.CountryId != "") {
          this.selectedCountry = this.userDetails.CountryId;
        }
        this.selectedCity = this.userDetails.CityId;
        this.selectedDistrict = this.userDetails.DistrictId;
        this.getCountriesDetails();
        this.getCitiesDetails();
        this.getDistrictDetails();

        // if (response.length > 0) {
        //   // this.notificationList = response;
        //   // this.notificationList.forEach(element => {
        //   //   element.CreatedDate = moment(element.CreatedDate).format("DD-MMM-YYYY");
        //   //});
        // }
        // else
        //   this.commonService.onMessageHandler("No notification found.", 0);
      },
        error => {
          this.commonService.onMessageHandler("Failed to retrieve profile details. Please try again", 0);
        });
  }


  getCountriesDetails() {
    this._dataContext.getCountries()
      .subscribe(response => {
        this.countries = response;
        console.log(this.countries);

        // if (response.length > 0) {
        //   // this.notificationList = response;
        //   // this.notificationList.forEach(element => {
        //   //   element.CreatedDate = moment(element.CreatedDate).format("DD-MMM-YYYY");
        //   //});
        // }
        // else
        //   this.commonService.onMessageHandler("No notification found.", 0);
      },
        error => {
          this.commonService.onMessageHandler("Failed to retrieve countries details. Please try again", 0);
        });
  }

  getCitiesDetails() {
    this._dataContext.getCities(this.selectedCountry)
      .subscribe(response => {
        this.cities = response;
        console.log(this.cities);

        // if (response.length > 0) {
        //   // this.notificationList = response;
        //   // this.notificationList.forEach(element => {
        //   //   element.CreatedDate = moment(element.CreatedDate).format("DD-MMM-YYYY");
        //   //});
        // }
        // else
        //   this.commonService.onMessageHandler("No notification found.", 0);
      },
        error => {
          this.commonService.onMessageHandler("Failed to retrieve countries details. Please try again", 0);
        });
  }
  getDistrictDetails() {
    this._dataContext.getDistricts(this.selectedCity)
      .subscribe(response => {
        this.districts = response;
        console.log("-------");
        console.log(this.districts);
        // if (response.length > 0) {
        //   // this.notificationList = response;
        //   // this.notificationList.forEach(element => {
        //   //   element.CreatedDate = moment(element.CreatedDate).format("DD-MMM-YYYY");
        //   //});
        // }
        // else
        //   this.commonService.onMessageHandler("No notification found.", 0);
      },
        error => {
          this.commonService.onMessageHandler("Failed to retrieve countries details. Please try again", 0);
        });
  }

  onChangeOfCountries() {
    this.userDetails.CountryId = this.selectedCountry;
  }
  onChangeOfCity() {
    this.userDetails.CityId = this.selectedCity;
  }
  onChangeOfDistrict() {
    this.userDetails.DistrictId = this.selectedDistrict;
  }


  updateProfile() {
    this.userDetails.ContactOption=[];
    if(this.isEmailSelected){
      this.userDetails.ContactOption.push("Email");
    }
    if(this.isPhoneSelected){
      this.userDetails.ContactOption.push("Phone");
    }



    this._dataContext.updateProfile(1, this.userDetails)
      .subscribe(response => {

        console.log("-------");
        console.log(response);
        // if (response.length > 0) {
        //   // this.notificationList = response;
        //   // this.notificationList.forEach(element => {
        //   //   element.CreatedDate = moment(element.CreatedDate).format("DD-MMM-YYYY");
        //   //});
        // }
        // else
        //   this.commonService.onMessageHandler("No notification found.", 0);
      },
        error => {
          this.commonService.onMessageHandler("Failed to update details. Please try again", 0);
        });
  }





}
