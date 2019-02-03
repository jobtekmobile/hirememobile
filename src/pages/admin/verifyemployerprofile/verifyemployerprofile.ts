import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ImageViewerController } from 'ionic-img-viewer';
/**
 * Generated class for the VerifyemployerprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-verifyemployerprofile',
  templateUrl: 'verifyemployerprofile.html',
})
export class VerifyemployerprofilePage {

  _imageViewerCtrl: ImageViewerController;
  employeers: any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,imageViewerCtrl: ImageViewerController) {
    this._imageViewerCtrl = imageViewerCtrl;
    this.employeers =[
      {
        "EmployerId": 33,
        "AspNetUserId": "12864f06-eae2-4f03-ad27-7b5bb95bbdde",
        "ApplicationUser": {
          "Claims": [],
          "Logins": [],
          "Roles": [
            {
              "UserId": "12864f06-eae2-4f03-ad27-7b5bb95bbdde",
              "RoleId": "1882606a-e938-44bc-bef8-03712cbd640b"
            }
          ],
          "FirstName": "Yann",
          "LastName": "Bogou",
          "Address": null,
          "ProfilePicUrl": "",
          "ActiveUntil": null,
          "CountryId": 1,
          "CityId": 6,
          "DistrictId": 18,
          "SecurityQuestionAnswers": null,
          "Candidates": null,
          "Agencies": null,
          "Employers": [],
          "SignalRConnections": null,
          "Email": "bagou@gmail.com",
          "EmailConfirmed": false,
          "PasswordHash": "AKwZY4tD0MNk5FZ1BbDSg9jXDxA01VtYpquEw7DZq0hUt9OrDJK3ZzoP5zk7IzAFsA==",
          "SecurityStamp": "ab1888ed-bd55-430f-a3cd-6e6f749c0c92",
          "PhoneNumber": "+22506457895",
          "PhoneNumberConfirmed": false,
          "TwoFactorEnabled": false,
          "LockoutEndDateUtc": null,
          "LockoutEnabled": true,
          "AccessFailedCount": 0,
          "Id": "12864f06-eae2-4f03-ad27-7b5bb95bbdde",
          "UserName": "bagou"
        },
        "Gender": 2,
        "GenderDesc": null,
        "CountryId": 1,
        "Country": "Ivory Coast",
        "CountryEntity": null,
        "CityId": 6,
        "CityEntity": null,
        "City": "Abidjan",
        "DistrictId": 18,
        "DistrictEntity": null,
        "District": "Marcory",
        "ProfileVerified": false,
        "CreatedBy": null,
        "CreatedDate": "1/19/2019 11:37:47 PM",
        "UpdatedBy": null,
        "UpdatedDate": null,
        "JobOffers": [],
        "FavouriteJobRequests": [],
        "FirstName": "Yann",
        "LastName": "Bogou",
        "IdProofDoc": "",
        "IdProofDocDesc": null,
        "ProfilePicUrl": "",
        "EmailId": null,
        "ContactNo": "+22506457895",
        "ContactOption": null,
        "Address": null,
        "Age": 24,
        "DOB": "0001-01-01T00:00:00Z",
        "IdProofDoc1": ""
      },
      {
        "EmployerId": 24,
        "AspNetUserId": "57becb07-591e-4076-9bb8-91a62a0ebc64",
        "ApplicationUser": {
          "Claims": [],
          "Logins": [],
          "Roles": [
            {
              "UserId": "57becb07-591e-4076-9bb8-91a62a0ebc64",
              "RoleId": "1882606a-e938-44bc-bef8-03712cbd640b"
            }
          ],
          "FirstName": "Justine",
          "LastName": "Kakou",
          "Address": null,
          "ProfilePicUrl": "",
          "ActiveUntil": null,
          "CountryId": 1,
          "CityId": 6,
          "DistrictId": 16,
          "SecurityQuestionAnswers": null,
          "Candidates": null,
          "Agencies": null,
          "Employers": [],
          "SignalRConnections": null,
          "Email": "Justine@yahoo.fr",
          "EmailConfirmed": false,
          "PasswordHash": "AAzRiXMUWZWuSugT8XToZKqdZAIBHKNbQseSewBB3p2vnl7OF0GN6p82SNvBs/A3Jg==",
          "SecurityStamp": "ff6b7e1e-5f93-4f87-8cff-99f5863f8ec4",
          "PhoneNumber": "+22506857984",
          "PhoneNumberConfirmed": false,
          "TwoFactorEnabled": false,
          "LockoutEndDateUtc": null,
          "LockoutEnabled": true,
          "AccessFailedCount": 0,
          "Id": "57becb07-591e-4076-9bb8-91a62a0ebc64",
          "UserName": "Justine1"
        },
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
        "CreatedDate": "12/25/2018 10:00:41 PM",
        "UpdatedBy": null,
        "UpdatedDate": null,
        "JobOffers": [],
        "FavouriteJobRequests": [],
        "FirstName": "Justine",
        "LastName": "Kakou",
        "IdProofDoc": "",
        "IdProofDocDesc": null,
        "ProfilePicUrl": "",
        "EmailId": null,
        "ContactNo": "+22506857984",
        "ContactOption": null,
        "Address": null,
        "Age": 38,
        "DOB": "0001-01-01T00:00:00Z",
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

