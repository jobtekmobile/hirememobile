import { Injectable, ViewChild } from '@angular/core';
import { Events, ToastController, App, Navbar } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { FormControl } from '@angular/forms';
import * as $ from 'jquery';
@Injectable()
export class CommonServices {
  @ViewChild(Navbar) navBar: Navbar;
  HAS_LOGGED_IN = 'hasVisitRegisterPage';
  HAS_SEEN_TUTORIAL = 'hasSeenTutorial';

  private apiServiceUrl: string;
  private _apiList: any = [];
  private appTtitle: string;
  private _cacheKeyList: any = [];
  private _appVersion: string;

  // ios flurry key
  // android flurry key
  constructor(
    public events: Events,
    public storage: Storage,
    public _toastCtrl: ToastController,
    public appCtrl: App
  ) {
    this.apiServiceUrl = "http://localhost:60114/"; //PG Api
    this.appTtitle = "";
    this._appVersion = "1.0.6";

    //Cache Key URL. This is used to maintain all cach  e data using cache key url.
    this._cacheKeyList["getCities"] = this.apiServiceUrl + "cities";
    //These API are used to get response from Elastic serach.
    this._apiList["getActiveCategories"] = { controller: "JobTekApi", method: "GetJobCategories", api: "api/JobTekApi/GetJobCategories" };
  }
  setStoreDataIncache(url, data) {
    let cacheKey = url;
   // let uniqueKey = "Health-Pro-App-" + this.getParentGroupEntityId();
    let ttl = 60 * 60 * 24 * 7 * 30 * 12;
    //      let delayType="all";
    return "";// this.cache.saveItem(cacheKey, data, uniqueKey, ttl);
  }
  // getStoreDataFromCache(key) {
  //   return this.cache.getItem(key).catch((data) => {
  //     // fall here if item is expired or doesn't exist
  //     return false;
  //   }).then((data) => {
  //     return data;
  //   });
  // }

  //Clear all cache
  clearAllCache() {
    //return this.cache.clearAll();
  }
  splitCountryCode(number) {
    return number.substring(0, number.length - 10);
  }
  splitMobileNumber(number) {
    return number.substring(number.length - 10, number.length);
  }
  getCacheKeyUrl(value) {
    return this._cacheKeyList[value];
  }
  getApiServiceUrl() {
    return this.apiServiceUrl;
  }
  getApiControllerName(value) {
    return this._apiList[value].api;
  }
  
  getTermsAndConditions() {
   // return this.termsAnsConditions;
  }
  validateEmail(email) {
    let email_reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return email_reg.test(email);
  };
  validatePhone(phone) {
    let phone_reg = /^\d{10}$/
    return phone_reg.test(phone);
  }
  getWebsiteURL() {
    //return this.websiteURL;
  }
  validateAlphanumeric(e) {
    var regex = /^[a-zA-Z0-9]+$/;
    var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
    if (regex.test(str)) {
      return true;
    }
    e.preventDefault();
    return false;
  }
  validateOnlyNumber(event) {
    if (event.which == 8 || event.keyCode == 37 || event.keyCode == 39 || event.keyCode == 46)
      return true;

    else if ((event.which != 46 || $(this).val().toString().indexOf('.') != -1) && (event.which < 48 || event.which > 57))
      event.preventDefault();
  }
  isNumber(value) {
    let number_regx = /^\d+$/;
    return number_regx.test(value);
  }
  validatePassword(value) {
    //let passwordRegx = /^(?=([^\d]*\d){8})$/;
    return value.length >= 8 ? true : false;
  }
  validateOnlyNumbeAndText(evt, value) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (evt.which != 8 && evt.which != 0 && (evt.keyCode >= 48 && evt.keyCode <= 57) && (evt.keyCode >= 96 && evt.keyCode <= 105)) {
      return false;
    }
    if (this.isNumber(value)) {
      return true;
    }
    else {
      return false;
    }
  }

  convert_case(str) {
    return str.toLowerCase().replace(/\b./g, function (a) { return a.toUpperCase(); });
  }
  onMessageHandler(error_message, value) {
    let toast = this._toastCtrl.create({
      message: error_message,
      duration: 2000,
      cssClass: !value ? "error" : "success",
      showCloseButton: true
    });
    toast.present();
  }
}