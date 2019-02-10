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

  ionViewDidEnter() {
    this.commonService.clearAllCache();
  }
  onLogin() {
    this._dataContext.LoginUser(this.login)
      .subscribe(response => {
        this.onSetAuthToken({ userId: response.UserId, type: response.Role,email:response.Email,userName:response.UserName });   
      },
        error => {
          this.commonService.onMessageHandler("Failed to login. Please try again", 0);
        });
  }
  onSetAuthToken(response) {
    this.commonService.setStoreDataIncache(this.commonService.getCacheKeyUrl("getLoggedInUserDetails"), response).then(res=>{
    //this.gotoDashboard();
    this.events.publish('user:loginsuccessfully', response.Role, Date.now());
    });
  }
  gotoDashboard() {
    this.navCtrl.setRoot("DashboardPage");
  }
  gotoRegister() {
    this.navCtrl.setRoot("RegisterPage");
  }
}