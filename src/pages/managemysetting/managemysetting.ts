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
  loggedInUserDetails: any = {};
  constructor(public navCtrl: NavController, public _dataContext: DataContext, public navParams: NavParams, imageViewerCtrl: ImageViewerController,
    private commonService: CommonServices) {
    this._imageViewerCtrl = imageViewerCtrl;
    //const imageViewer = this._imageViewerCtrl.create(myImage);

    this.getLoggedInUserDetailsFromCache();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ManagemysettingPage');
  }
  getLoggedInUserDetailsFromCache() {
    //this.loggedInUserDetails = JSON.parse(localStorage.getItem("loggedInUserCredential"));;
    this.commonService.getStoreDataFromCache(this.commonService.getCacheKeyUrl("getLoggedInUserDetails"))
      .then((result) => {
        if (result && result.userId) {
          this.loggedInUserDetails = result;
          this.getProfileDetails();
        }
        else {
          this.navCtrl.setRoot("LoginPage");
        }
      });
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


    if (this.loggedInUserDetails.type == "Employee") {
      this.getEmployeeProfile();
    } else if (this.loggedInUserDetails.type == "Employer") {
      this.getEmployerProfile();
    } else if (this.loggedInUserDetails.type == "Agency") {
      this.getAgencyProfile();
    }




  }
  getEmployeeProfile() {
    this._dataContext.CandidateProfileById(this.loggedInUserDetails.userId)
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

  getEmployerProfile() {
    this._dataContext.GetEmployerProfileDetails(this.loggedInUserDetails.userId)
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

  getAgencyProfile() {
    this._dataContext.GetAgencyProfileDetails(this.loggedInUserDetails.userId)
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
    if (this.loggedInUserDetails.type == "Employee") {
      this.updateEmployeeProfile();
    } else if (this.loggedInUserDetails.type == "Employer") {
      this.updateEmployerProfile();
    } else if (this.loggedInUserDetails.type == "Agency") {
      this.updateAgencyProfile();
    }

    
  }


updateEmployeeProfile(){
  this.userDetails.ContactOption = [];
    if (this.isEmailSelected) {
      this.userDetails.ContactOption.push("Email");
    }
    if (this.isPhoneSelected) {
      this.userDetails.ContactOption.push("Phone");
    }



    this._dataContext.updateProfile(this.loggedInUserDetails.userId, this.userDetails)
      .subscribe(response => {

        if (response.Status=="OK") {
          this.commonService.onMessageHandler(response.Message, 1);
        }else{
          this.commonService.onMessageHandler(response.Message, 1);
        }
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

updateEmployerProfile(){
  this.userDetails.ContactOption = [];
    if (this.isEmailSelected) {
      this.userDetails.ContactOption.push("Email");
    }
    if (this.isPhoneSelected) {
      this.userDetails.ContactOption.push("Phone");
    }



    this._dataContext.updateEmployerProfile(this.loggedInUserDetails.userId, this.userDetails)
      .subscribe(response => {

        if (response.Status=="OK") {
          this.commonService.onMessageHandler(response.Message, 1);
        }else{
          this.commonService.onMessageHandler(response.Message, 1);
        }
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

updateAgencyProfile(){
  this.userDetails.ContactOption = [];
    if (this.isEmailSelected) {
      this.userDetails.ContactOption.push("Email");
    }
    if (this.isPhoneSelected) {
      this.userDetails.ContactOption.push("Phone");
    }



    this._dataContext.updateAgencyProfile(this.loggedInUserDetails.userId, this.userDetails)
      .subscribe(response => {

        if (response.Status=="OK") {
          this.commonService.onMessageHandler(response.Message, 1);
        }else{
          this.commonService.onMessageHandler(response.Message, 1);
        }
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
