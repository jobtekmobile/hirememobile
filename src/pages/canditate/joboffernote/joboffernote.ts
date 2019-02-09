import { Platform, NavParams, IonicPage } from 'ionic-angular';
import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { DataContext } from '../../../providers/dataContext.service';
import { CommonServices } from '../../../providers/common.service';
import moment from 'moment';
@IonicPage()
@Component({
  selector: 'page-joboffernote',
  templateUrl: 'joboffernote.html'
})
export class JobOfferNotePage {

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,
    public _dataContext: DataContext, private commonService: CommonServices
  ) {
    
  }
  
  
  dismiss() {
    this.viewCtrl.dismiss(false);
  }
}




