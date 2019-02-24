import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CommonServices } from '../providers/common.service';



@Component({
  templateUrl: 'app.html',
  providers: [StatusBar]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  language: any = "en";
  rootPage: any = "AppStartUp";
  pages: Array<{ title: string, component: any, imagepath: string }>;
  employeepages: Array<{ title: string, component: any, imagepath: string }>;
  employerpages: Array<{ title: string, component: any, imagepath: string }>;
  agencypages: Array<{ title: string, component: any, imagepath: string }>;
  adminpages: Array<{ title: string, component: any, imagepath: string }>;
  userDetails: any = {};
  constructor(private commonService: CommonServices, public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public events: Events) {
    // used for an example of ngFor and navigation
    this.employeepages = [
      { title: 'Tableau de bord', component: "DashboardPage", imagepath: "assets/imgs/menu/dashboard.png" },
      { title: 'Recherche offre/demande', component: "SearchjobsPage", imagepath: "assets/imgs/menu/search-job.png" },
      { title: "Mes demandes d'emploi", component: "JobrequestsPage", imagepath: "assets/imgs/menu/my-job-requests.png" },
      { title: 'Gérer mes favoris', component: "FavoritejoboffersPage", imagepath: "assets/imgs/menu/favorites.png" },
      { title: 'Messages et notifications', component: "NotificationPage", imagepath: "assets/imgs/menu/messages-notifications.png" },
      { title: 'Gérer mes réglages ', component: "ManagemysettingPage", imagepath: "assets/imgs/menu/manage-setting.png" }
    ];
    this.employerpages = [
      { title: 'Tableau de bord', component: "DashboardPage", imagepath: "assets/imgs/menu/dashboard.png" },
      { title: 'Recherche offre/demande', component: "SearchjobsPage", imagepath: "assets/imgs/menu/search-job.png" },
      { title: "Mes offres d'emploi" , component: "EployerJobOffer", imagepath: "assets/imgs/menu/my-job-requests.png" },
      { title: 'Gérer mes favoris', component: "EmployerFavouriteJobRequest", imagepath: "assets/imgs/menu/favorites.png" },
      { title: 'Messages et notifications', component: "NotificationPage", imagepath: "assets/imgs/menu/messages-notifications.png" },
      { title: 'Gérer mes réglages ', component: "ManagemysettingPage", imagepath: "assets/imgs/menu/manage-setting.png" }
    ];
    this.agencypages = [
      { title: 'Tableau de bord', component: "DashboardPage", imagepath: "assets/imgs/menu/dashboard.png" },
      { title: 'Recherche offre/demande', component: "SearchjobsPage", imagepath: "assets/imgs/menu/search-job.png" },
      { title: 'Inscrivez-vous candidat', component: "AgencyregistercandidatePage", imagepath: "assets/imgs/menu/my-job-requests.png" },
      { title: 'Vérifier le candidat', component: "AgencyverifycandidatePage", imagepath: "assets/imgs/menu/check.png" },
      { title: "Mes demandes d'emploi", component: "AgencymyjobrequestPage", imagepath: "assets/imgs/menu/my-job-requests.png" },
      { title: 'Messages et notifications', component: "NotificationPage", imagepath: "assets/imgs/menu/messages-notifications.png" },
      { title: 'Gérer mes réglages ', component: "ManagemysettingPage", imagepath: "assets/imgs/menu/manage-setting.png" }
    ];
    this.adminpages = [
      { title: 'Tableau de bord', component: "AdmindashboardPage", imagepath: "assets/imgs/menu/dashboard.png" },
      { title: 'Agence de vérification', component: "VerifyagencyprofilePage", imagepath: "assets/imgs/menu/check.png" },
      { title: 'Vérifier le candidat', component: "VerifycandidateprofilePage", imagepath: "assets/imgs/menu/check.png" },
      { title: "Vérifier l'employeur", component: "VerifyemployerprofilePage", imagepath: "assets/imgs/menu/check.png" },
      { title: 'Vérifier la demande de travail', component: "VerifyjobrequestprofilePage", imagepath: "assets/imgs/menu/check.png" },
      { title: "Vérifier l'offre d'emploi", component: "VerifyjobofferprofilePage", imagepath: "assets/imgs/menu/check.png" },
      { title: 'Exportation', component: "ExportPage", imagepath: "assets/imgs/menu/export.png" }
    ];
    this.events.subscribe('user:loginsuccessfully', (role, time) => {
      this.commonService.getStoreDataFromCache(this.commonService.getCacheKeyUrl("getLoggedInUserDetails"))
        .then((result) => {
          this.userDetails = result;
          if (result && result.userId) {
            if (result.type == "Admin") {
              this.pages = this.adminpages;
              // this.rootPage = "AdmindashboardPage";
            }
            else if (result.type == "Employee") {
              this.pages = this.employeepages;
              // this.rootPage = "DashboardPage";
            }
            else if (result.type == "Employer") {
              this.pages = this.employerpages;
              // this.rootPage = "DashboardPage";
            } else {
              this.pages = this.agencypages;
              // this.rootPage = "DashboardPage";
            }
            this.nav.setRoot("AppStartUp");
          }
          else {
            this.rootPage = "LoginPage";
          }
        });
    });
    this.commonService.getStoreDataFromCache(this.commonService.getCacheKeyUrl("getLoggedInUserDetails"))
      .then((result) => {
        this.userDetails = result;
        if (result && result.userId) {
          if (result.type == "Admin") {
            this.pages = this.adminpages;
            // this.rootPage = "AdmindashboardPage";
          }
          else if (result.type == "Employee") {
            this.pages = this.employeepages;
            // this.rootPage = "DashboardPage";
          }
          else if (result.type == "Employer") {
            this.pages = this.employerpages;
            // this.rootPage = "DashboardPage";
          } else {
            this.pages = this.agencypages;
            // this.rootPage = "DashboardPage";
          }
          this.rootPage = "AppStartUp";
        }
        else {
          this.rootPage = "LoginPage";
        }
        this.initializeApp();
        //var selectFieldValue = document.querySelector("#google_translate_element select").value;
        //alert();
        // this.language = "en";//document.getElementById("language").value;
        // let selectField: any = document.querySelector("#google_translate_element select");
        // for (var i = 0; i < selectField.children.length; i++) {
        //   let option: any = selectField.children[i];
        //   // find desired langauge and change the former language of the hidden selection-field
        //   if (option.value == this.language) {
        //     selectField.selectedIndex = i;
        //     // trigger change event afterwards to make google-lib translate this side
        //     selectField.dispatchEvent(new Event('change'));
        //     break;
        //   }
        // }
      });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.backgroundColorByHexString("#fe003f");
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  logout() {
    this.commonService.clearAllCache();
    this.nav.setRoot("LoginPage");

  }
  ChangeToFrench() {
    // this.language = "fr";//document.getElementById("language").value;
    // let selectField: any = document.querySelector("#google_translate_element select");
    // for (var i = 0; i < selectField.children.length; i++) {
    //   let option: any = selectField.children[i];
    //   // find desired langauge and change the former language of the hidden selection-field
    //   if (option.value == this.language) {
    //     selectField.selectedIndex = i;
    //     // trigger change event afterwards to make google-lib translate this side
    //     selectField.dispatchEvent(new Event('change'));
    //     break;
    //   }
    // }
  }
  ChangeToEnglish() {
    // this.language = "en";//document.getElementById("language").value;
    // let selectField: any = document.querySelector("#google_translate_element select");
    // for (var i = 0; i < selectField.children.length; i++) {
    //   let option: any = selectField.children[i];
    //   // find desired langauge and change the former language of the hidden selection-field
    //   if (option.value == this.language) {
    //     selectField.selectedIndex = i;
    //     // trigger change event afterwards to make google-lib translate this side
    //     selectField.dispatchEvent(new Event('change'));
    //     break;
    //   }
    // }
  }
  getLoggedInUserDetails(): any {
    this.commonService.getStoreDataFromCache(this.commonService.getCacheKeyUrl("getLoggedInUserDetails"))
      .then((result) => {
        this.userDetails = result;
        if (result && result.userId) {
          if (result.type == "Admin") {
            this.pages = this.adminpages;
            // this.rootPage = "AdmindashboardPage";
          }
          else if (result.type == "Employee") {
            this.pages = this.employeepages;
            // this.rootPage = "DashboardPage";
          }
          else if (result.type == "Employer") {
            this.pages = this.employerpages;
            // this.rootPage = "DashboardPage";
          } else {
            this.pages = this.agencypages;
            // this.rootPage = "DashboardPage";
          }
          this.rootPage = "AppStartUp";
          this.initializeApp();
        }
        else {
          this.rootPage = "LoginPage";
        }
      });
  }
}
