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
  rootPage: any="AppStartUp";
  pages: Array<{ title: string, component: any, imagepath: string }>;
  employeepages: Array<{ title: string, component: any, imagepath: string }>;
  employerpages: Array<{ title: string, component: any, imagepath: string }>;
  agencypages: Array<{ title: string, component: any, imagepath: string }>;
  adminpages: Array<{ title: string, component: any, imagepath: string }>;
  userDetails: any = {};
  constructor(private commonService: CommonServices, public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public events: Events) {
    // used for an example of ngFor and navigation
    this.employeepages = [
      { title: 'Dashboard', component: "DashboardPage", imagepath: "assets/imgs/menu/dashboard.png" },
      { title: 'Search Jobs', component: "SearchjobsPage", imagepath: "assets/imgs/menu/search-job.png" },
      { title: 'Manage My Job Requests', component: "JobrequestsPage", imagepath: "assets/imgs/menu/my-job-requests.png" },
      { title: 'Manage My Favorites', component: "FavoritejoboffersPage", imagepath: "assets/imgs/menu/favorites.png" },
      { title: 'Message & Notifications', component: "NotificationPage", imagepath: "assets/imgs/menu/messages-notifications.png" },
      { title: 'Manage My Settings', component: "ManagemysettingPage", imagepath: "assets/imgs/menu/manage-setting.png" }
    ];
    this.employerpages = [
      { title: 'Dashboard', component: "DashboardPage", imagepath: "assets/imgs/menu/dashboard.png" },
      { title: 'Search Jobs', component: "SearchjobsPage", imagepath: "assets/imgs/menu/search-job.png" },
      { title: 'My Job Offer', component: "EployerJobOffer", imagepath: "assets/imgs/menu/my-job-requests.png" },
      { title: 'Manage My Favorites', component: "EmployerFavouriteJobRequest", imagepath: "assets/imgs/menu/favorites.png" },
      { title: 'Message & Notifications', component: "NotificationPage", imagepath: "assets/imgs/menu/messages-notifications.png" },
      { title: 'Manage My Settings', component: "ManagemysettingPage", imagepath: "assets/imgs/menu/manage-setting.png" }
    ];
    this.agencypages = [
      { title: 'Dashboard', component: "DashboardPage", imagepath: "assets/imgs/menu/dashboard.png" },
      { title: 'Search Jobs', component: "SearchjobsPage", imagepath: "assets/imgs/menu/search-job.png" },
      { title: 'Register Candidate', component: "AgencyregistercandidatePage", imagepath: "assets/imgs/menu/my-job-requests.png" },
      { title: 'Verify Candidate', component: "AgencyverifycandidatePage", imagepath: "assets/imgs/menu/check.png" },
      { title: 'My Job Request', component: "AgencymyjobrequestPage", imagepath: "assets/imgs/menu/my-job-requests.png" },
      { title: 'Message & Notifications', component: "NotificationPage", imagepath: "assets/imgs/menu/messages-notifications.png" },
      { title: 'Manage My Settings', component: "ManagemysettingPage", imagepath: "assets/imgs/menu/manage-setting.png" }
    ];
    this.adminpages = [
      { title: 'Dashboard', component: "AdmindashboardPage", imagepath: "assets/imgs/menu/dashboard.png" },
      { title: 'Verify Agency', component: "VerifyagencyprofilePage", imagepath: "assets/imgs/menu/check.png" },
      { title: 'Verify Candidate', component: "VerifycandidateprofilePage", imagepath: "assets/imgs/menu/check.png" },
      { title: 'Verify Employer', component: "VerifyemployerprofilePage", imagepath: "assets/imgs/menu/check.png" },
      { title: 'Verify Job Request', component: "VerifyjobrequestprofilePage", imagepath: "assets/imgs/menu/check.png" },
      { title: 'Verify Job Offer', component: "VerifyjobofferprofilePage", imagepath: "assets/imgs/menu/check.png" },
      { title: 'Export', component: "ExportPage", imagepath: "assets/imgs/menu/export.png" }
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
            else if (result.type == "Candidate") {
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
      });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
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
  getLoggedInUserDetails(): any {
    this.commonService.getStoreDataFromCache(this.commonService.getCacheKeyUrl("getLoggedInUserDetails"))
      .then((result) => {
        this.userDetails = result;
        if (result && result.userId) {
          if (result.type == "Admin") {
            this.pages = this.adminpages;
            // this.rootPage = "AdmindashboardPage";
          }
          else if (result.type == "Candidate") {
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
