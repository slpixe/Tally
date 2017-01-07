import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { ItemDetailPage } from '../item-detail/item-detail';
import { ItemCreatePage } from '../item-create/item-create';

import { Counters } from '../../providers/providers';
import { Counter } from '../../models/counter';

@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage {
  currentItems: Counter[];

  constructor(public navCtrl: NavController, public counters: Counters, public modalCtrl: ModalController, public provCounters: Counters) {}

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {

    this.provCounters.load().then(() => {
      this.currentItems = this.provCounters.allCounters;
      console.log(this.currentItems);
    });

  }

  /**
   * Prompt the user to add a new item. This shows our ItemCreatePage in a
   * modal and then adds the new item to our data source if the user created one.
   */
  addItem() {

    let counterInst = new Counter(
      {
        'label': 'test 1',
        'count': 4
      }
    );

    this.provCounters.save(counterInst);

    //let addModal = this.modalCtrl.create(ItemCreatePage);
    //addModal.onDidDismiss(counter => {
    //  if (counter) {
        //this.counters.add(counter);
    //  }
    //})
    //addModal.present();
  }

  /**
   * Delete an item from the list of items.
   */
  deleteItem(counter) {
    //this.counters.delete(counter);
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(counter: Counter) {
    this.navCtrl.push(ItemDetailPage, {
      counter: counter
    });
  }

  /**
  * increments a counters count value
  */
  increment(counter) {
    counter.count++;
  }

  /**
  * decrements a counters count value
  */
  decrement(counter) {
    counter.count--;
  }
}
