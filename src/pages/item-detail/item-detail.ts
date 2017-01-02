import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Counters } from '../../providers/providers';

@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})
export class ItemDetailPage {
  counter: any;

  constructor(public navCtrl: NavController, navParams: NavParams, counters: Counters) {
    this.counter = navParams.get('counter');
  }

}
