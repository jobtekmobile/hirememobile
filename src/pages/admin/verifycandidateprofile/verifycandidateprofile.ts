import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ImageViewerController } from 'ionic-img-viewer';
import { DataContext } from '../../../providers/dataContext.service';
import { CommonServices } from '../../../providers/common.service';
import moment from 'moment';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-verifycandidateprofile',
  templateUrl: 'verifycandidateprofile.html',
})
export class VerifycandidateprofilePage {

  _imageViewerCtrl: ImageViewerController;
  candidates: any = [];
  loggedInUserDetails: any = {};
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
    this._dataContext.GetUnverifiedCandidatesForAdmin()
      .subscribe(response => {
        this.candidates = response;
        this.candidates.forEach(element => {
          element.CreatedDate = moment(element.CreatedDate).format("DD MMM YYYY");
        });
      },
        error => {
          this.commonService.onMessageHandler("Failed to retrieve countries details. Please try again", 0);
        });
  }
  activateCandidate(item) {
    this._dataContext.ActivateCandidate(item.CandidateId)
      .subscribe(response => {
        if (response.Status == "OK") {
          this.commonService.onMessageHandler(response.Message, 1);
          this.getUnverifiedAgenciesForAdmin();
        }
      },
        error => {
          this.commonService.onMessageHandler("Failed to verify candidate. Please try again", 0);
        });
  }

  verify(item) {
    const confirm = this.alertCtrl.create({
      title: 'Verify Candidate?',
      message: 'Do you want to verify this candidate?',
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
            this.activateCandidate(item);
          }
        }
      ]
    });
    confirm.present();
  }
}
