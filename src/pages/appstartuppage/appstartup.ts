import { Component } from '@angular/core';
import { NavController, IonicPage, Events } from 'ionic-angular';
import { DataContext } from '../../providers/dataContext.service';
import { CommonServices } from '../../providers/common.service';

@IonicPage()
@Component({
    selector: 'page-appstartup',
    templateUrl: 'appstartup.html'
})
export class AppStartUp {

    loggedInUserDetails: any = {};
    constructor(public navCtrl: NavController,
        public events: Events,
        public _dataContext: DataContext,
        private commonService: CommonServices) {
    }

    ionViewDidEnter() {
        this.getLoggedInUserDetails();
    }
    getLoggedInUserDetails(): any {
        this.commonService.getStoreDataFromCache(this.commonService.getCacheKeyUrl("getLoggedInUserDetails"))
            .then((result) => {
                let userDetails = result;
                if (result && result.userId) {
                    if (result.type == "Admin") {
                        this.navCtrl.setRoot("AdmindashboardPage");
                    }
                    else if (result.type == "Candidate") {
                        this.navCtrl.setRoot("DashboardPage");
                    }
                    else if (result.type == "Employer") {
                        this.navCtrl.setRoot("DashboardPage");
                    } else {
                        this.navCtrl.setRoot("DashboardPage");
                    }

                }
                else {
                    this.navCtrl.setRoot("LoginPage");
                }
            });
    }
}