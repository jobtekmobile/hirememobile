import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ImageViewerController } from 'ionic-img-viewer';
import { DataContext } from '../../../providers/dataContext.service';
import { CommonServices } from '../../../providers/common.service';
import moment from 'moment';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-verifyemployerprofile',
  templateUrl: 'verifyemployerprofile.html',
})
export class VerifyemployerprofilePage {
  loggedInUserDetails: any = {};
  _imageViewerCtrl: ImageViewerController;
  employeers: any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, imageViewerCtrl: ImageViewerController,
    public _dataContext: DataContext, private commonService: CommonServices, public alertCtrl: AlertController) {
    this._imageViewerCtrl = imageViewerCtrl;
  }

  ionViewDidLoad() {
    this.getLoggedInUserDetailsFromCache();
  }
  getLoggedInUserDetailsFromCache() {
    this.commonService.getStoreDataFromCache(this.commonService.getCacheKeyUrl("getLoggedInUserDetails"))
      .then((result) => {
        if (result && result.userId) {
          this.loggedInUserDetails = result;
          this.getUnVerifiedEmployersForAdmin();
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

  getUnVerifiedEmployersForAdmin() {
    this._dataContext.GetUnVerifiedEmployersForAdmin()
      .subscribe(response => {
        this.employeers = response;
        this.employeers.forEach(element => {
          element.CreatedDate = moment(element.CreatedDate).format("DD MMM YYYY");
        });
      },
        error => {
          this.commonService.onMessageHandler("Failed to retrieve unverified employeers. Please try again", 0);
        });
  }
  activateEmployer(item) {
    this._dataContext.ActivateEmployer(item.EmployerId)
      .subscribe(response => {
        if (response.Status == "OK") {
          this.commonService.onMessageHandler(response.Message, 1);
          this.getUnVerifiedEmployersForAdmin();
        }
      },
        error => {
          this.commonService.onMessageHandler("Failed to verify employeer. Please try again", 0);
        });
  }

  verify(item) {
    const confirm = this.alertCtrl.create({
      title: 'Verify Candidate?',
      message: 'Do you want to verify this employeer?',
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.activateEmployer(item);
          }
        }
      ]
    });
    confirm.present();
  }
}

