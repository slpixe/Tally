import {Component, ViewChild} from '@angular/core';
import {ionicBootstrap, Events, Platform, Nav, MenuController} from 'ionic-angular';
import {StatusBar, Splashscreen} from 'ionic-native';
import {CounterPage} from './pages/counter/counter';
import {Page1} from './pages/page1/page1';
import {CounterData} from './providers/counter-data';

interface PageObj {
  title: string;
  component: any;
  icon?: string;
  index?: number;
}

@Component({
  templateUrl: 'build/app.html'
})

class TallyApp {

  // the root nav is a child of the root app component
  // @ViewChild(Nav) gets a reference to the app's root nav
  @ViewChild(Nav) nav: Nav;

  // List of pages that can be navigated to from the left menu
  // the left menu only works after login
  // the login page disables the left menu
  appPages: PageObj[] = [
    { title: 'Counters', component: CounterPage, icon: 'calendar' },
    { title: 'About', component: Page1, icon: 'calendar' }
    //{ title: 'About', component: TabsPage, index: 3, icon: 'information-circle' },
  ];

  rootPage: any = CounterPage;

  constructor(
    private events: Events,
    private counterData: CounterData,
    private menu: MenuController,
    platform: Platform
    // confData: ConferenceData
  ) {
    // Call any initial plugins when ready
    platform.ready().then(() => {
      StatusBar.styleDefault();
      Splashscreen.hide();
    });

    // load the conference data
    // confData.load();
    //dq - might not need this
    counterData.load();

    // decide which menu items should be hidden by current login status stored in local storage
    // this.userData.hasLoggedIn().then((hasLoggedIn) => {
    //   this.enableMenu(hasLoggedIn === 'true');
    // });

    // this.listenToLoginEvents();
  }

  openPage(page: PageObj) {
    // the nav component was found using @ViewChild(Nav)
    // reset the nav to remove previous pages and only have this page
    // we wouldn't want the back button to show in this scenario
    if (page.index) {
      this.nav.setRoot(page.component, {tabIndex: page.index});

    } else {
      this.nav.setRoot(page.component);
    }
  }

}

// Pass the main App component as the first argument
// Pass any providers for your app in the second argument
// Set any config for your app as the third argument, see the docs for
// more ways to configure your app:
// http://ionicframework.com/docs/v2/api/config/Config/
// Place the tabs on the bottom for all platforms
// See the theming docs for the default values:
// http://ionicframework.com/docs/v2/theming/platform-specific-styles/

ionicBootstrap(TallyApp, [CounterData], {
  tabbarPlacement: 'bottom'
});
