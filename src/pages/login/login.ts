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
  gotoDashboard(){
    this.navCtrl.setRoot("DashboardPage");
  }
  gotoRegister(){
    this.navCtrl.setRoot("RegisterPage");
  }
}
