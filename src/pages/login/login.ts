import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  gender: string = "f";
  constructor(public navCtrl: NavController) {

  }

  onLogin(){
    this.onSetAuthToken({userId:1,type:"canditate"});
  }
  onSetAuthToken(response) {
    localStorage.setItem('loggedInUserCredential', JSON.stringify(response));
    this.gotoDashboard();
  }
  gotoDashboard(){
    this.navCtrl.setRoot("DashboardPage");
  }
  gotoRegister(){
    this.navCtrl.setRoot("RegisterPage");
  }
}
