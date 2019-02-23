import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataContext } from '../../providers/dataContext.service';
import { CommonServices } from '../../providers/common.service';

@IonicPage()
@Component({
  selector: 'page-forgotpassword',
  templateUrl: 'forgotpassword.html',
})
export class ForgotpasswordPage {

  passwordObj: any = {
    Email: "",
    Password: "",
    ConfirmPassword: "",
    Code: "1234"
  };
  isOtp: boolean=false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public _dataContext: DataContext, private commonService: CommonServices) {
    // this.getLoggedInUserDetailsFromCache();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangepasswordPage');
  }

  forgotPassword() {
    //this.passwordObj.Email = this.loggedInUserDetails.email;
    if (this.passwordObj.Email != "") {
      this._dataContext.ForgotPassword(this.passwordObj)
        .subscribe(response => {
          if (response.Status == "OK") {
            this.passwordObj.Code = response.Data.Code;
            this.isOtp = true;

            this.commonService.onMessageHandler(response.Message, 1);
          } else {
            this.commonService.onMessageHandler(response.Message, 0);
          }
        },
          error => {
            this.commonService.onMessageHandler("Failed to reset password. Please try again", 0);
          });
    } else {
      this.commonService.onMessageHandler("Email can't be blank", 0);
    }

  }
  resetPassword() {
    // this.passwordObj.Email = this.loggedInUserDetails.email;
    if (this.passwordObj.Password == this.passwordObj.ConfirmPassword) {
      this._dataContext.ResetPassword(this.passwordObj)
        .subscribe(response => {
          if (response.Status == "OK") {
            this.commonService.onMessageHandler(response.Message, 1);
            this.navCtrl.setRoot("LoginPage");
          } else {
            this.commonService.onMessageHandler(response.Message, 0);
          }
        },
          error => {
            this.commonService.onMessageHandler("Failed to reset password. Please try again", 0);
          });
    } else {
      this.commonService.onMessageHandler("Password and confirm password didnot match", 0);
    }

  }
}

