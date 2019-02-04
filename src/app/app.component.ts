import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = "LoginPage";

  pages: Array<{title: string, component: any,imagepath:string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Admin Dashboard', component: "AdmindashboardPage", imagepath:"../assets/imgs/menu/search-job.png" },
      { title: 'Dashboard', component: "DashboardPage", imagepath:"../assets/imgs/menu/search-job.png" },
      { title: 'Search Jobs', component: "SearchjobsPage", imagepath:"../assets/imgs/menu/search-job.png" },
      { title: 'Manage My Job Requests', component: "JobrequestsPage", imagepath:"../assets/imgs/menu/my-job-requests.png" },
      { title: 'Manage My Favorites', component: "FavoritejoboffersPage", imagepath:"../assets/imgs/menu/favorites.png" },
      { title: 'Message & Notifications', component: "NotificationPage", imagepath:"../assets/imgs/menu/messages-notifications.png" },
      { title: 'Manage My Settings', component: "ManagemysettingPage", imagepath:"../assets/imgs/menu/manage-setting.png" }
    ];

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
  logout(){
    this.nav.setRoot("LoginPage");
  }
}
