import {Component} from '@angular/core'
import {Page1} from '../page1/page1';
import {CounterPage} from '../counter/counter';

@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

  private tab1Root: Page1;
  private tab4Root: CounterPage;

  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.tab1Root = Page1;
    this.tab4Root = CounterPage;
  }
}
