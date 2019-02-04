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
  notificationList:any=[];
  isAvailable:boolean=true;
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
  getLoggedInUserDetailsFromCache(){
    this.loggedInUserDetails = localStorage.getItem("loggedInUserCredential");
    this.getNotification();
  }
  getNotification() {
    this._dataContext.GetActiveNotificationByUserId(2)
    .subscribe(response => {
      if (response.length > 0) {
        this.notificationList = response;
        this.notificationList.forEach(element => {
          element.CreatedDate = moment(element.CreatedDate).format("DD-MMM-YYYY");
        });
      }
      else
        this.commonService.onMessageHandler("No notification found.", 0);
    },
      error => {
        this.commonService.onMessageHandler("Failed to retrieve notification details. Please try again", 0);
      });
  }
}
