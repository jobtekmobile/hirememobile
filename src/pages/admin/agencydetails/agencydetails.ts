import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataContext } from '../../../providers/dataContext.service';
import { CommonServices } from '../../../providers/common.service';
import moment from 'moment';

@IonicPage()
@Component({
  selector: 'page-agencydetails',
  templateUrl: 'agencydetails.html',
})
export class AgencydetailsPage {
  agencyId: any;
  agencyDetails: any = {};
  loggedInUserDetails:any={};
  constructor(public navCtrl: NavController, public navParams: NavParams, public _dataContext: DataContext, private commonService: CommonServices) {
    this.agencyId = this.navParams.get("AgencyId");
   

  }
  getAgencyDetailsForAdmin() {
    this._dataContext.getAgencyDetails(this.agencyId)
      .subscribe(response => {
        this.agencyDetails = response;
        if (this.agencyDetails.CreatedDate != "" || this.agencyDetails.CreatedDate != null)
          this.agencyDetails.CreatedDate = moment(this.agencyDetails.CreatedDate).format("DD MMM YYYY");
          if (this.agencyDetails.ManagerDOB != "" || this.agencyDetails.ManagerDOB != null)
          this.agencyDetails.ManagerDOB = moment(this.agencyDetails.ManagerDOB).format("DD MMM YYYY");
        // this.agencyDetails.forEach(element => {
        //   element.PublishedDate = moment(element.PublishedDate).format("DD MMM YYYY");
        // });
      },
        error => {
          this.commonService.onMessageHandler("Failed to retrieve countries details. Please try again", 0);
        });
  }
  ionViewDidLoad() {
    this.getLoggedInUserDetailsFromCache();
  }
  getLoggedInUserDetailsFromCache() {
    this.commonService.getStoreDataFromCache(this.commonService.getCacheKeyUrl("getLoggedInUserDetails"))
        .then((result) => {
            if (result && result.userId) {
                this.loggedInUserDetails = result;
                this.getAgencyDetailsForAdmin();
            }
            else {
                this.navCtrl.setRoot("LoginPage");
            }
        });
}

}
