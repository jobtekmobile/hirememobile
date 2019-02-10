import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataContext } from '../../../providers/dataContext.service';
import { CommonServices } from '../../../providers/common.service';
/**
 * Generated class for the AgencydetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agencydetails',
  templateUrl: 'agencydetails.html',
})
export class AgencydetailsPage {
  agencyId: any;
  agencyDetails: any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams, public _dataContext: DataContext, private commonService: CommonServices) {
    this.agencyId = this.navParams.get("AgencyId");
    this.getAgencyDetailsForAdmin();

  }
  getAgencyDetailsForAdmin() {
    this._dataContext.getAgencyDetails(this.agencyId)
      .subscribe(response => {
        this.agencyDetails = response;
        
        // this.agencyDetails.forEach(element => {
        //   element.PublishedDate = moment(element.PublishedDate).format("DD MMM YYYY");
        // });
      },
        error => {
          this.commonService.onMessageHandler("Failed to retrieve countries details. Please try again", 0);
        });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AgencydetailsPage');
  }

}
