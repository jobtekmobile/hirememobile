import { Component } from '@angular/core';
import { NavController, IonicPage, Events } from 'ionic-angular';
import { DataContext } from '../../providers/dataContext.service';
import { CommonServices } from '../../providers/common.service';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  gender: string = "f";
  login = {
    UserName: "",
    Password: ""
  }
  loggedInUserDetails: any = {};
  constructor(public navCtrl: NavController,
    public events: Events,
    public _dataContext: DataContext,
    private commonService: CommonServices) {

  }

  onLogin() {
    this._dataContext.LoginUser(this.login)
      .subscribe(response => {
        console.log("-------");
        console.log(response);
 
        this.onSetAuthToken({ userId: response.UserId, type: response.Role });
        this.events.publish('user:loginsuccessfully', response.Role, Date.now())
        // if (response.length > 0) {
        //   // this.notificationList = response;
        //   // this.notificationList.forEach(element => {
        //   //   element.CreatedDate = moment(element.CreatedDate).format("DD-MMM-YYYY");
        //   //});
        // }
        // else
        //   this.commonService.onMessageHandler("No notification found.", 0);
      },
        error => {
          this.commonService.onMessageHandler("Failed to update details. Please try again", 0);
        });

  }
  onSetAuthToken(response) {
    this.commonService.setStoreDataIncache(this.commonService.getCacheKeyUrl("getLoggedInUserDetails"),response);
    this.gotoDashboard();
  }
  gotoDashboard() {
    this.navCtrl.setRoot("DashboardPage");
  }
  gotoRegister() {
    this.navCtrl.setRoot("RegisterPage");
  }
}
