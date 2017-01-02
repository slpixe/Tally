import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailPage } from '../item-detail/item-detail';
import { Counters } from '../../providers/providers';
import { Counter } from '../../models/counter';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
  currentItems: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public counters: Counters) {}

  /**
   * Perform a service for the proper items.
   */
  getItems(ev) {
    let val = ev.target.value;
    if(!val || !val.trim()) {
      this.currentItems = [];
      return;
    }
    //this.currentItems = this.counters.query({
    //  name: val
    //});
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(counter: Counter) {
    this.navCtrl.push(ItemDetailPage, {
      counter: counter
    });
  }

}
