import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ImageViewerController } from 'ionic-img-viewer';
/**
 * Generated class for the VerifyjobofferprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-verifyjobofferprofile',
  templateUrl: 'verifyjobofferprofile.html',
})
export class VerifyjobofferprofilePage {

  _imageViewerCtrl: ImageViewerController;
  joboffers: any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,imageViewerCtrl: ImageViewerController) {
    this._imageViewerCtrl = imageViewerCtrl;
    this.joboffers = [
      {
        "JobOfferId": 23,
        "JobId": 8,
        "Job": {
          "JobId": 8,
          "JobName": "Server/Caterer",
          "JobCategoryId": 4,
          "JobGroup": null,
          "JobDesc": null,
          "IconImage": "/assets/images/portfolio/catering.jpg",
          "JobTasks": null
        },
        "EmployerId": 19,
        "Employer": {
          "EmployerId": 19,
          "AspNetUserId": "e0eb5120-b020-457b-bb21-a7afe945081d",
          "ApplicationUser": null,
          "Gender": 1,
          "GenderDesc": null,
          "CountryId": 1,
          "Country": "Ivory Coast",
          "CountryEntity": null,
          "CityId": 6,
          "CityEntity": null,
          "City": "Abidjan",
          "DistrictId": 16,
          "DistrictEntity": null,
          "District": "Cocody",
          "ProfileVerified": true,
          "CreatedBy": null,
          "CreatedDate": "12/19/2018 7:32:56 PM",
          "UpdatedBy": null,
          "UpdatedDate": null,
          "JobOffers": [],
          "FavouriteJobRequests": [],
          "FirstName": "Carine",
          "LastName": "jojo",
          "IdProofDoc": "",
          "IdProofDocDesc": null,
          "ProfilePicUrl": "",
          "EmailId": "carine@yahoo.fr",
          "ContactNo": "+22506524896",
          "ContactOption": "Email,Phone",
          "Address": "tekaka",
          "Age": 22,
          "DOB": "0001-01-01T00:00:00Z",
          "IdProofDoc1": null
        },
        "Gender": 1,
        "GenderDesc": null,
        "Age": 0,
        "MinAge": 25,
        "MaxAge": 30,
        "ExperienceInYears": 2,
        "ExperienceInMonths": 2,
        "IdProofDoc": null,
        "IdProofDocDesc": null,
        "ProfileVerified": false,
        "StaffType": 2,
        "StaffTypeDesc": null,
        "Disponibility": "2018-12-12T00:00:00Z",
        "CountryId": 1,
        "Country": null,
        "CityId": 6,
        "City": null,
        "DistrictId": 12,
        "District": null,
        "SalaryType": 1,
        "SalaryTypeDesc": null,
        "SalaryTypeOtherDesc": null,
        "CanRead": true,
        "CanWrite": true,
        "ExpectedMinSalary": 35000.00,
        "ExpectedMaxSalary": 40000.00,
        "SleepOnSite": false,
        "ExpectedMinRooms": 0,
        "ExpectedMaxRooms": 0,
        "MinGroupPeople": 0,
        "MaxGroupPeople": 0,
        "IsPublished": true,
        "PublishedDate": "2018-12-19T20:08:07Z",
        "ValidTill": "0001-01-01T00:00:00Z",
        "AdditionalDescription": "BOnjour bespoin d'un expert pour ceremonie de mariage",
        "JobOfferJobTasks": null,
        "VerifiedByAdmin": false,
        "VerificationDate": null,
        "StarRating": 0,
        "MasterJobTasks": null,
        "JobOfferNotes": null
      },
      {
        "JobOfferId": 22,
        "JobId": 7,
        "Job": {
          "JobId": 7,
          "JobName": "Manicure/Pedicure/Massage",
          "JobCategoryId": 3,
          "JobGroup": null,
          "JobDesc": null,
          "IconImage": "/assets/images/portfolio/esthetician.jpg",
          "JobTasks": null
        },
        "EmployerId": 19,
        "Employer": {
          "EmployerId": 19,
          "AspNetUserId": "e0eb5120-b020-457b-bb21-a7afe945081d",
          "ApplicationUser": null,
          "Gender": 1,
          "GenderDesc": null,
          "CountryId": 1,
          "Country": "Ivory Coast",
          "CountryEntity": null,
          "CityId": 6,
          "CityEntity": null,
          "City": "Abidjan",
          "DistrictId": 16,
          "DistrictEntity": null,
          "District": "Cocody",
          "ProfileVerified": true,
          "CreatedBy": null,
          "CreatedDate": "12/19/2018 7:32:56 PM",
          "UpdatedBy": null,
          "UpdatedDate": null,
          "JobOffers": [],
          "FavouriteJobRequests": [],
          "FirstName": "Carine",
          "LastName": "jojo",
          "IdProofDoc": "",
          "IdProofDocDesc": null,
          "ProfilePicUrl": "",
          "EmailId": "carine@yahoo.fr",
          "ContactNo": "+22506524896",
          "ContactOption": "Email,Phone",
          "Address": "tekaka",
          "Age": 22,
          "DOB": "0001-01-01T00:00:00Z",
          "IdProofDoc1": null
        },
        "Gender": 2,
        "GenderDesc": null,
        "Age": 0,
        "MinAge": 25,
        "MaxAge": 30,
        "ExperienceInYears": 1,
        "ExperienceInMonths": 2,
        "IdProofDoc": null,
        "IdProofDocDesc": null,
        "ProfileVerified": false,
        "StaffType": 0,
        "StaffTypeDesc": null,
        "Disponibility": "2018-12-06T00:00:00Z",
        "CountryId": 1,
        "Country": null,
        "CityId": 8,
        "City": null,
        "DistrictId": 0,
        "District": null,
        "SalaryType": 2,
        "SalaryTypeDesc": null,
        "SalaryTypeOtherDesc": null,
        "CanRead": true,
        "CanWrite": false,
        "ExpectedMinSalary": 10000.00,
        "ExpectedMaxSalary": 25000.00,
        "SleepOnSite": false,
        "ExpectedMinRooms": 0,
        "ExpectedMaxRooms": 0,
        "MinGroupPeople": 0,
        "MaxGroupPeople": 0,
        "IsPublished": true,
        "PublishedDate": "2018-12-19T20:04:58Z",
        "ValidTill": "0001-01-01T00:00:00Z",
        "AdditionalDescription": "Besoin d'une masseuse",
        "JobOfferJobTasks": null,
        "VerifiedByAdmin": false,
        "VerificationDate": null,
        "StarRating": 0,
        "MasterJobTasks": null,
        "JobOfferNotes": null
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
