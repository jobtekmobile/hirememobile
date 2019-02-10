import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ImageViewerController } from 'ionic-img-viewer';
import { DataContext } from '../../../providers/dataContext.service';
import { CommonServices } from '../../../providers/common.service';
import moment from 'moment';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-verifyagencyprofile',
  templateUrl: 'verifyagencyprofile.html',
})
export class VerifyagencyprofilePage {
  _imageViewerCtrl: ImageViewerController;
  agencyDetails: any = [];
  loggedInUserDetails:any={};

  constructor(public navCtrl: NavController, public navParams: NavParams, imageViewerCtrl: ImageViewerController,
    public _dataContext: DataContext, private commonService: CommonServices, public alertCtrl: AlertController) {
    this._imageViewerCtrl = imageViewerCtrl;
    //const imageViewer = this._imageViewerCtrl.create(myImage);
  }
  ionViewDidLoad() {
    this.getLoggedInUserDetailsFromCache();
  }
  getLoggedInUserDetailsFromCache() {
    this.commonService.getStoreDataFromCache(this.commonService.getCacheKeyUrl("getLoggedInUserDetails"))
        .then((result) => {
            if (result && result.userId) {
                this.loggedInUserDetails = result;
                this.getUnverifiedAgenciesForAdmin();
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
  getUnverifiedAgenciesForAdmin() {
    this._dataContext.GetUnverifiedAgenciesForAdmin()
      .subscribe(response => {
        this.agencyDetails = response;
        this.agencyDetails.forEach(element => {
          element.PublishedDate = moment(element.PublishedDate).format("DD MMM YYYY");
        });
      },
        error => {
          this.commonService.onMessageHandler("Failed to retrieve countries details. Please try again", 0);
        });
  }
  activateAgency(item) {
    this._dataContext.ActivateAgency(item.AgencyId)
      .subscribe(response => {
        if (response.Status=="OK") {
          this.commonService.onMessageHandler(response.Message, 1);
         this.getUnverifiedAgenciesForAdmin();
        }
      },
        error => {
          this.commonService.onMessageHandler("Failed to activate agency. Please try again", 0);
        });
  }

  verify(item) {
    const confirm = this.alertCtrl.create({
      title: 'Verify Agency?',
      message: 'Do you want to verify this agency?',
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
            this.activateAgency(item);
          }
        }
      ]
    });
    confirm.present();
  }
  gotoDetails(item){
    this.navCtrl.push("AgencydetailsPage", { AgencyId: item.AgencyId });
  }
}
