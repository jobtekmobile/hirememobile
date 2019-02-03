import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ImageViewerController } from 'ionic-img-viewer';
/**
 * Generated class for the VerifyagencyprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-verifyagencyprofile',
  templateUrl: 'verifyagencyprofile.html',
})
export class VerifyagencyprofilePage {
  _imageViewerCtrl: ImageViewerController;
  agencyDetails: any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,imageViewerCtrl: ImageViewerController) {
    this._imageViewerCtrl = imageViewerCtrl;
    //const imageViewer = this._imageViewerCtrl.create(myImage);
  
    this.agencyDetails = [
      {
        "AgencyId": 17,
        "AspNetUserId": "5eb269ab-88a8-44db-bae7-4518f511f527",
        "ApplicationUser": {
          "Claims": [],
          "Logins": [],
          "Roles": [
            {
              "UserId": "5eb269ab-88a8-44db-bae7-4518f511f527",
              "RoleId": "a106148d-f9ca-4952-a266-96272f9ee189"
            }
          ],
          "FirstName": "Jean bat",
          "LastName": "Ake",
          "Address": null,
          "ProfilePicUrl": "",
          "ActiveUntil": null,
          "CountryId": 1,
          "CityId": 6,
          "DistrictId": 13,
          "SecurityQuestionAnswers": null,
          "Candidates": null,
          "Agencies": [],
          "Employers": null,
          "SignalRConnections": null,
          "Email": "Jeanake@yahoo.fr",
          "EmailConfirmed": false,
          "PasswordHash": "AL/O4aNNybDSNJv36O6889n0KrAvXySf96LxuaB9Trn2HB5JolCFA1HS9lIyWSOqzw==",
          "SecurityStamp": "b06ebe5c-c24d-45a1-a32e-fb2f40d6c78e",
          "PhoneNumber": "+22503748292",
          "PhoneNumberConfirmed": false,
          "TwoFactorEnabled": false,
          "LockoutEndDateUtc": null,
          "LockoutEnabled": true,
          "AccessFailedCount": 0,
          "Id": "5eb269ab-88a8-44db-bae7-4518f511f527",
          "UserName": "Niamke"
        },
        "AgencyName": "Nounou en cu",
        "AgencyLogo": "",
        "AgencyWebsiteURL": "Www.google.fr",
        "ManagerFirstName": "Niamke",
        "ManagerLastName": null,
        "ManagerAge": "38",
        "ManagerDOB": "0001-01-01T00:00:00Z",
        "CompanyActivityDesc": "Nous plaçons des profils qualifié dans les familles d'expatriés ",
        "CountryId": null,
        "Country": null,
        "CountryEntity": null,
        "CityId": null,
        "CityEntity": null,
        "City": null,
        "DistrictId": null,
        "DistrictEntity": null,
        "District": null,
        "ProfileVerified": false,
        "Candidates": [],
        "CreatedBy": null,
        "CreatedDate": "1/29/2019 3:25:40 PM",
        "UpdatedBy": null,
        "UpdatedDate": null,
        "IdProofDoc": "",
        "PhoneNo": "+22503748292",
        "EmailId": "Jeanake@yahoo.fr",
        "ProfilePicUrl": "",
        "IdProofDoc1": ""
      },
      {
        "AgencyId": 16,
        "AspNetUserId": "61b26d7c-65e3-4fba-9826-ddeb4fd8d29a",
        "ApplicationUser": {
          "Claims": [],
          "Logins": [],
          "Roles": [
            {
              "UserId": "61b26d7c-65e3-4fba-9826-ddeb4fd8d29a",
              "RoleId": "a106148d-f9ca-4952-a266-96272f9ee189"
            }
          ],
          "FirstName": "Gouao",
          "LastName": "Elo",
          "Address": null,
          "ProfilePicUrl": "",
          "ActiveUntil": null,
          "CountryId": 1,
          "CityId": 6,
          "DistrictId": 12,
          "SecurityQuestionAnswers": null,
          "Candidates": null,
          "Agencies": [],
          "Employers": null,
          "SignalRConnections": null,
          "Email": "Elo@yahoo.fr",
          "EmailConfirmed": false,
          "PasswordHash": "APbTz1wSuym333Ex6OAZLlkNaSezHbSy9mMWAYsAv3A13Wqr+wQGiU/0W+L9Zu7Dcg==",
          "SecurityStamp": "962e9b6e-99fc-4b3b-8731-244e67dc8002",
          "PhoneNumber": "+22509783626",
          "PhoneNumberConfirmed": false,
          "TwoFactorEnabled": false,
          "LockoutEndDateUtc": null,
          "LockoutEnabled": true,
          "AccessFailedCount": 0,
          "Id": "61b26d7c-65e3-4fba-9826-ddeb4fd8d29a",
          "UserName": "Elo"
        },
        "AgencyName": "Nounou babi",
        "AgencyLogo": "",
        "AgencyWebsiteURL": "https://www.yoopala.com/inscription/agence?source=adwords&medium=cpc&content=nounou&campaign=rr-agence&gclid=Cj0KCQiA-JXiBRCpARIsAGqF8wVI4uGCx6ILNLI0qvPXek2NOZfAjrMYSQqLg3CF28stM2iQN4zdYZkaAnywEALw_wcB",
        "ManagerFirstName": "Gisèle ",
        "ManagerLastName": null,
        "ManagerAge": "41",
        "ManagerDOB": "0001-01-01T00:00:00Z",
        "CompanyActivityDesc": "Nous vous proposons des nounous, cuisiner, boys... ",
        "CountryId": null,
        "Country": null,
        "CountryEntity": null,
        "CityId": null,
        "CityEntity": null,
        "City": null,
        "DistrictId": null,
        "DistrictEntity": null,
        "District": null,
        "ProfileVerified": false,
        "Candidates": [],
        "CreatedBy": null,
        "CreatedDate": "1/21/2019 6:30:40 PM",
        "UpdatedBy": null,
        "UpdatedDate": null,
        "IdProofDoc": "",
        "PhoneNo": "+22509783626",
        "EmailId": "Elo@yahoo.fr",
        "ProfilePicUrl": "",
        "IdProofDoc1": ""
      }
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VerifyagencyprofilePage');
  }
  presentImage(myImage) {
  
    const imageViewer = this._imageViewerCtrl.create(myImage);
    imageViewer.present();
 
    // setTimeout(() => imageViewer.dismiss(), 1000);
    // imageViewer.onDidDismiss(() => alert('Viewer dismissed'));
  }
}
