import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ImageViewerController } from 'ionic-img-viewer';
/**
 * Generated class for the VerifyjobrequestprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-verifyjobrequestprofile',
  templateUrl: 'verifyjobrequestprofile.html',
})
export class VerifyjobrequestprofilePage {

  _imageViewerCtrl: ImageViewerController;
  jobrequests: any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,imageViewerCtrl: ImageViewerController) {
    this._imageViewerCtrl = imageViewerCtrl;
    this.jobrequests = [
      {
        "JobRequestId": 75,
        "CandidateId": 41,
        "Candidate": {
          "CandidateId": 41,
          "AspNetUserId": "3734841d-a19c-4844-978c-35638675b940",
          "ApplicationUser": null,
          "AgencyId": null,
          "UserName": null,
          "ProfilePicUrl": "",
          "Gender": 1,
          "GenderDesc": null,
          "Age": 0,
          "DOB": "0001-01-01T00:00:00Z",
          "ExperienceInYears": null,
          "ExperienceInMonths": null,
          "IdProofDoc": "",
          "IdProofDocDesc": null,
          "ProfileVerified": true,
          "StaffType": 1,
          "StaffTypeDesc": null,
          "Disponibility": "0001-01-01T00:00:00Z",
          "CountryId": 1,
          "Country": "Ivory Coast",
          "CountryEntity": null,
          "CityId": 6,
          "CityEntity": null,
          "City": "Abidjan",
          "DistrictId": 21,
          "DistrictEntity": null,
          "District": "Treichville",
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
          "CreatedDate": "12/9/2018 10:42:49 PM",
          "CreatedBy": null,
          "UpdatedDate": null,
          "UpdatedBy": null,
          "FirstName": "Sidibe",
          "LastName": "carelle",
          "ContactNo": "+23523435322",
          "EmailId": "carelle.sidibe@yahoo.fr",
          "Address": "qGFR RHFRDR",
          "AdditionalDescription": null,
          "JobRequests": [],
          "FavouriteJobOffers": null,
          "ContactOption": null,
          "IdProofDoc1": null
        },
        "JobId": 9,
        "Job": {
          "JobId": 9,
          "JobName": "Decorator",
          "JobCategoryId": 4,
          "JobGroup": null,
          "JobDesc": null,
          "IconImage": "/assets/images/portfolio/Ceremony.jpg",
          "JobTasks": null
        },
        "IsPublished": true,
        "PublishedDate": "2019-01-02T12:48:07Z",
        "ValidTill": "0001-01-01T00:00:00Z",
        "JobRequestDescription": null,
        "JobRequestJobTasks": null,
        "MasterJobTasks": null,
        "JobRequestNotes": null,
        "SkillPic1": null,
        "SkillPic2": null,
        "SkillPic3": null,
        "StarRating": 0,
        "VerifiedByAdmin": false,
        "VerificationDate": null,
        "AgencyJobRequestGroupId": null,
        "AgencyJobRequestTitle": null
      },
      {
        "JobRequestId": 70,
        "CandidateId": 52,
        "Candidate": {
          "CandidateId": 52,
          "AspNetUserId": "db9e9a75-c915-49be-a891-77414d1df68f",
          "ApplicationUser": null,
          "AgencyId": null,
          "UserName": null,
          "ProfilePicUrl": "",
          "Gender": 1,
          "GenderDesc": null,
          "Age": 61,
          "DOB": "0001-01-01T00:00:00Z",
          "ExperienceInYears": null,
          "ExperienceInMonths": null,
          "IdProofDoc": "",
          "IdProofDocDesc": null,
          "ProfileVerified": false,
          "StaffType": 1,
          "StaffTypeDesc": null,
          "Disponibility": "0001-01-01T00:00:00Z",
          "CountryId": 1,
          "Country": "Ivory Coast",
          "CountryEntity": null,
          "CityId": 6,
          "CityEntity": null,
          "City": "Abidjan",
          "DistrictId": 16,
          "DistrictEntity": null,
          "District": "Cocody",
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
          "CreatedDate": "12/20/2018 4:06:44 PM",
          "CreatedBy": null,
          "UpdatedDate": null,
          "UpdatedBy": null,
          "FirstName": "Charles Ed",
          "LastName": "AMICHou",
          "ContactNo": "+22545321356",
          "EmailId": "chadouamichira@yahoo.fr",
          "Address": "16 Rue Jeanne",
          "AdditionalDescription": null,
          "JobRequests": [],
          "FavouriteJobOffers": null,
          "ContactOption": null,
          "IdProofDoc1": null
        },
        "JobId": 1,
        "Job": {
          "JobId": 1,
          "JobName": "Nanny",
          "JobCategoryId": 1,
          "JobGroup": "Internal Home Job",
          "JobDesc": null,
          "IconImage": "/assets/images/portfolio/nanny.jpg",
          "JobTasks": null
        },
        "IsPublished": true,
        "PublishedDate": "2018-12-20T23:12:02Z",
        "ValidTill": "0001-01-01T00:00:00Z",
        "JobRequestDescription": "Recherche actif d'un métier de nounou ",
        "JobRequestJobTasks": null,
        "MasterJobTasks": null,
        "JobRequestNotes": null,
        "SkillPic1": null,
        "SkillPic2": null,
        "SkillPic3": null,
        "StarRating": 0,
        "VerifiedByAdmin": false,
        "VerificationDate": null,
        "AgencyJobRequestGroupId": null,
        "AgencyJobRequestTitle": null
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
