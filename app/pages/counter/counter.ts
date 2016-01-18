import {Page, NavController} from 'ionic-framework/ionic';

@Page({
  templateUrl: 'build/pages/counter/counter.html'
})
export class CounterPage {
  constructor(nav: NavController) {
    this.nav = nav;
  }
}
