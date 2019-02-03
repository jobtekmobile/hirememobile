import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ImageViewerController } from 'ionic-img-viewer';
/**
 * Generated class for the VerifycandidateprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-verifycandidateprofile',
  templateUrl: 'verifycandidateprofile.html',
})
export class VerifycandidateprofilePage {

  _imageViewerCtrl: ImageViewerController;
  candidates: any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,imageViewerCtrl: ImageViewerController) {
    this._imageViewerCtrl = imageViewerCtrl;
    this.candidates = [
  
      {
        "CandidateId": 19,
        "AspNetUserId": "6a2cc3da-d36b-4be9-849e-99c3d48f28ef",
        "ApplicationUser": {
          "Claims": [],
          "Logins": [],
          "Roles": [
            {
              "UserId": "6a2cc3da-d36b-4be9-849e-99c3d48f28ef",
              "RoleId": "411f884f-e8fa-4794-ac79-1f186186370d"
            }
          ],
          "FirstName": "Chantal",
          "LastName": "Yao",
          "Address": "Quartier de droite",
          "ProfilePicUrl": "",
          "ActiveUntil": null,
          "CountryId": 1,
          "CityId": 1,
          "DistrictId": 1,
          "SecurityQuestionAnswers": null,
          "Candidates": [],
          "Agencies": null,
          "Employers": null,
          "SignalRConnections": null,
          "Email": "Chantal@gmail.com",
          "EmailConfirmed": false,
          "PasswordHash": "AFiJVphuI/0TutW+6Yis6J5FpZ59dtEUCpRW8IoQvwlX2AP1Oax+iD5TBO7exnliaA==",
          "SecurityStamp": "79c7d0f4-acb6-4a81-a83e-33f18ed05439",
          "PhoneNumber": "0102030407",
          "PhoneNumberConfirmed": false,
          "TwoFactorEnabled": false,
          "LockoutEndDateUtc": null,
          "LockoutEnabled": true,
          "AccessFailedCount": 0,
          "Id": "6a2cc3da-d36b-4be9-849e-99c3d48f28ef",
          "UserName": "Chantal1"
        },
        "AgencyId": null,
        "UserName": null,
        "ProfilePicUrl": "",
        "Gender": 2,
        "GenderDesc": null,
        "Age": null,
        "DOB": "2018-10-10T00:00:00Z",
        "ExperienceInYears": null,
        "ExperienceInMonths": null,
        "IdProofDoc": "",
        "IdProofDocDesc": null,
        "ProfileVerified": false,
        "StaffType": 0,
        "StaffTypeDesc": null,
        "Disponibility": "0001-01-01T00:00:00Z",
        "CountryId": 1,
        "Country": "Ivory",
        "CountryEntity": null,
        "CityId": 1,
        "CityEntity": null,
        "City": null,
        "DistrictId": 1,
        "DistrictEntity": null,
        "District": null,
        "SalaryType": 0,
        "SalaryTypeDesc": null,
        "SalaryTypeOtherDesc": null,
        "CanRead": false,
        "CanWrite": false,
        "ExpectedMinSalary": 0.00,
        "ExpectedMaxSalary": 0.00,
        "SleepOnSite": false,
        "ExpectedMinRooms": null,
        "ExpectedMaxRooms": null,
        "MinGroupPeople": null,
        "MaxGroupPeople": null,
        "CreatedDate": null,
        "CreatedBy": null,
        "UpdatedDate": null,
        "UpdatedBy": null,
        "FirstName": "Chantal",
        "LastName": "Yao",
        "ContactNo": "0102030407",
        "EmailId": "Chantal@gmail.com",
        "Address": "Quartier de droite",
        "AdditionalDescription": null,
        "JobRequests": [],
        "FavouriteJobOffers": null,
        "ContactOption": null,
        "IdProofDoc1": null
      },
      {
        "CandidateId": 17,
        "AspNetUserId": "9d7bcd46-57af-41b8-8a05-3730244230ae",
        "ApplicationUser": {
          "Claims": [],
          "Logins": [],
          "Roles": [
            {
              "UserId": "9d7bcd46-57af-41b8-8a05-3730244230ae",
              "RoleId": "411f884f-e8fa-4794-ac79-1f186186370d"
            }
          ],
          "FirstName": "Cristine",
          "LastName": "Kouakou",
          "Address": "quartier 1",
          "ProfilePicUrl": "",
          "ActiveUntil": null,
          "CountryId": 1,
          "CityId": 1,
          "DistrictId": 3,
          "SecurityQuestionAnswers": null,
          "Candidates": [],
          "Agencies": null,
          "Employers": null,
          "SignalRConnections": null,
          "Email": "cristine@gmail.com",
          "EmailConfirmed": false,
          "PasswordHash": "ALVA7fNWPge8Il2oa8vS+OV5LTTu74rGa2WqFpkQAi4YCczaKWTXgYzm0AnrYXdUww==",
          "SecurityStamp": "f05fb5cc-9919-4c7e-8168-1ee1129cd0b9",
          "PhoneNumber": "0102030405",
          "PhoneNumberConfirmed": false,
          "TwoFactorEnabled": false,
          "LockoutEndDateUtc": null,
          "LockoutEnabled": true,
          "AccessFailedCount": 0,
          "Id": "9d7bcd46-57af-41b8-8a05-3730244230ae",
          "UserName": "cristine1"
        },
        "AgencyId": null,
        "UserName": null,
        "ProfilePicUrl": "",
        "Gender": 1,
        "GenderDesc": null,
        "Age": null,
        "DOB": "2018-10-10T00:00:00Z",
        "ExperienceInYears": null,
        "ExperienceInMonths": null,
        "IdProofDoc": "",
        "IdProofDocDesc": null,
        "ProfileVerified": false,
        "StaffType": 0,
        "StaffTypeDesc": null,
        "Disponibility": "0001-01-01T00:00:00Z",
        "CountryId": 1,
        "Country": "Ivory",
        "CountryEntity": null,
        "CityId": 1,
        "CityEntity": null,
        "City": null,
        "DistrictId": 3,
        "DistrictEntity": null,
        "District": null,
        "SalaryType": 0,
        "SalaryTypeDesc": null,
        "SalaryTypeOtherDesc": null,
        "CanRead": false,
        "CanWrite": false,
        "ExpectedMinSalary": 0.00,
        "ExpectedMaxSalary": 0.00,
        "SleepOnSite": false,
        "ExpectedMinRooms": null,
        "ExpectedMaxRooms": null,
        "MinGroupPeople": null,
        "MaxGroupPeople": null,
        "CreatedDate": null,
        "CreatedBy": null,
        "UpdatedDate": null,
        "UpdatedBy": null,
        "FirstName": "Cristine",
        "LastName": "Kouakou",
        "ContactNo": "0102030405",
        "EmailId": "cristine@gmail.com",
        "Address": "quartier 1",
        "AdditionalDescription": null,
        "JobRequests": [],
        "FavouriteJobOffers": null,
        "ContactOption": null,
        "IdProofDoc1": null
      },
      {
        "CandidateId": 2,
        "AspNetUserId": "c2955710-f2d0-43c6-921a-e9f9fcabe8f4",
        "ApplicationUser": {
          "Claims": [],
          "Logins": [],
          "Roles": [
            {
              "UserId": "c2955710-f2d0-43c6-921a-e9f9fcabe8f4",
              "RoleId": "411f884f-e8fa-4794-ac79-1f186186370d"
            }
          ],
          "FirstName": "Candidate 2 First Name",
          "LastName": "Candidate 2 Last Name",
          "Address": "lakdljas alkjdjflaskj",
          "ProfilePicUrl": "",
          "ActiveUntil": null,
          "CountryId": null,
          "CityId": null,
          "DistrictId": null,
          "SecurityQuestionAnswers": null,
          "Candidates": [],
          "Agencies": null,
          "Employers": null,
          "SignalRConnections": null,
          "Email": "employee2@gmail.com",
          "EmailConfirmed": false,
          "PasswordHash": "AGfMqBl3amr1t0K4reEADjbavRWaYIukXhTvBgotMROgXFVV+ge3vRdF30XGpZyJSQ==",
          "SecurityStamp": "7467790c-46fc-4ed1-840c-b95dce896ec2",
          "PhoneNumber": "9999999999",
          "PhoneNumberConfirmed": false,
          "TwoFactorEnabled": false,
          "LockoutEndDateUtc": null,
          "LockoutEnabled": true,
          "AccessFailedCount": 0,
          "Id": "c2955710-f2d0-43c6-921a-e9f9fcabe8f4",
          "UserName": "employee2@gmail.com"
        },
        "AgencyId": 2,
        "UserName": null,
        "ProfilePicUrl": "",
        "Gender": 2,
        "GenderDesc": null,
        "Age": 26,
        "DOB": "2018-10-10T00:00:00Z",
        "ExperienceInYears": 3,
        "ExperienceInMonths": 3,
        "IdProofDoc": "",
        "IdProofDocDesc": null,
        "ProfileVerified": false,
        "StaffType": 2,
        "StaffTypeDesc": null,
        "Disponibility": "0001-01-01T00:00:00Z",
        "CountryId": 1,
        "Country": "Ivory",
        "CountryEntity": null,
        "CityId": 1,
        "CityEntity": null,
        "City": "AbidJan",
        "DistrictId": 1,
        "DistrictEntity": null,
        "District": "Abobo",
        "SalaryType": 2,
        "SalaryTypeDesc": null,
        "SalaryTypeOtherDesc": null,
        "CanRead": false,
        "CanWrite": false,
        "ExpectedMinSalary": 0.00,
        "ExpectedMaxSalary": 0.00,
        "SleepOnSite": false,
        "ExpectedMinRooms": null,
        "ExpectedMaxRooms": null,
        "MinGroupPeople": null,
        "MaxGroupPeople": null,
        "CreatedDate": null,
        "CreatedBy": null,
        "UpdatedDate": null,
        "UpdatedBy": null,
        "FirstName": "Candidate 2 First Name",
        "LastName": "Candidate 2 Last Name",
        "ContactNo": "9999999999",
        "EmailId": "employee2@gmail.com",
        "Address": "Address 2",
        "AdditionalDescription": null,
        "JobRequests": [],
        "FavouriteJobOffers": null,
        "ContactOption": null,
        "IdProofDoc1": null
      }
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VerifycandidateprofilePage');
  }
  presentImage(myImage) {
  
    const imageViewer = this._imageViewerCtrl.create(myImage);
    imageViewer.present();
 
    // setTimeout(() => imageViewer.dismiss(), 1000);
    // imageViewer.onDidDismiss(() => alert('Viewer dismissed'));
  }
}
