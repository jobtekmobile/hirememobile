import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataContext } from '../../providers/dataContext.service';
import { CommonServices } from '../../providers/common.service';
import moment from 'moment';
/**
 * Generated class for the NotificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html',
})
export class NotificationPage {
  loggedInUserDetails: any = {};
  notificationList: any = [];
  isAvailable: boolean = true;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public _dataContext: DataContext,
    private commonService: CommonServices
  ) {
  }


  ionViewWillEnter() {
    this.getLoggedInUserDetailsFromCache();
  }
  getLoggedInUserDetailsFromCache() {
    //this.loggedInUserDetails = JSON.parse(localStorage.getItem("loggedInUserCredential"));;
    this.commonService.getStoreDataFromCache(this.commonService.getCacheKeyUrl("getLoggedInUserDetails"))
      .then((result) => {
        if (result && result.userId) {
          this.loggedInUserDetails = result;
          this.getNotification();
        }
        else {
          this.navCtrl.setRoot("LoginPage");
        }
      });
  }
  getNotification() {
    if (this.loggedInUserDetails.type = "Employee") {
      this._dataContext.GetActiveNotificationByUserId(this.loggedInUserDetails.userId)
        .subscribe(response => {
          if (response.length > 0) {
            this.isAvailable = true;
            this.notificationList = response;
            this.notificationList.forEach(element => {
              element.CreatedDate = moment(element.CreatedDate).format("DD-MMM-YYYY");
            });
          }
          else {
            this.isAvailable = false;
            this.commonService.onMessageHandler("No notification found.", 0);
          }
        },
          error => {
            this.commonService.onMessageHandler("Failed to retrieve notification details. Please try again", 0);
          });
    } else if (this.loggedInUserDetails.type = "Employer") {
      this._dataContext.GetEmployerNotificationDetails(this.loggedInUserDetails.userId)
        .subscribe(response => {
          if (response.length > 0) {
            this.isAvailable = true;
            this.notificationList = response;
            this.notificationList.forEach(element => {
              element.CreatedDate = moment(element.CreatedDate).format("DD-MMM-YYYY");
            });
          }
          else {
            this.isAvailable = false;
            this.commonService.onMessageHandler("No notification found.", 0);
          }
        },
          error => {
            this.commonService.onMessageHandler("Failed to retrieve notification details. Please try again", 0);
          });
    } else if (this.loggedInUserDetails.type = "Agency") {

    }

  }
}
