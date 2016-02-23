import {Page} from 'ionic-framework/ionic';
import {Page1} from '../page1/page1';
import {CounterPage} from '../counter/counter';

@Page({
  templateUrl: 'build/pages/tabs/tabs.html'
})

export class TabsPage {
    constructor() {
        // this tells the tabs component which Pages
        // should be each tab's root Page
        this.tab1Root = Page1;
        this.tab4Root = CounterPage;
    }
}
