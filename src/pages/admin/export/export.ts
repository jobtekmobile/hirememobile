import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import moment from 'moment';
import { Http, Response, Headers, RequestOptionsArgs } from '@angular/http';
import { DataContext } from '../../../providers/dataContext.service';
import { CommonServices } from '../../../providers/common.service';
/**
 * Generated class for the ExportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-export',
  templateUrl: 'export.html',
})
export class ExportPage {
  members = [];
  searchParam = { MemberType: 0 };

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, private _http: Http,
    public _dataContext: DataContext, private commonService: CommonServices) {

    this.searchMembersForAdmin();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExportPage');
  }
  searchMembersForAdmin() {


    this._dataContext.SearchMembersForAdmin(this.searchParam)
      .subscribe(response => {
        this.members = response;
        console.log(this.members);
        this.members.forEach(element => {
          element.PublishedDate = moment(element.PublishedDate).format("DD MMM YYYY");
        });
      },
        error => {
          this.commonService.onMessageHandler("Failed to retrieve members. Please try again", 0);
        });
  }
  openFilter() {
    let filterModal = this.modalCtrl.create("FilterExportPage");
    filterModal.onDidDismiss(item => {
      if (item) {
        this.members = item.Members;
        this.searchParam = item.SearchParam
      }
    })
    filterModal.present();
  }
  download() {

    let url = this.commonService.getApiServiceUrl()+ "api/Admin/ExportMembersToExcel?MemberType=" + this.searchParam.MemberType;
    for (var property in this.searchParam) {
      if (this.searchParam.hasOwnProperty(property)) {
        console.log(property, ' ', this.searchParam[property]);
        if (property != "MemberType" && this.searchParam[property] !="") {
          url = url + "&" + property + "=" + this.searchParam[property];
        }
      }
    }
    console.log(url);
    window.open(url);
  }
}
