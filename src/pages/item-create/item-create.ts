import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { NavController, ViewController, NavParams } from 'ionic-angular';
import { Counters } from '../../providers/providers';

@Component({
  selector: 'page-item-create',
  templateUrl: 'item-create.html'
})
export class ItemCreatePage {

  isReadyToSave: boolean;

  counter: any;

  form: FormGroup;

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, formBuilder: FormBuilder, navParams: NavParams, counters: Counters) {

    this.counter = navParams.get('counter');

    //a bit bigger than I like, but can't find a counter.label || ''
    if(this.counter == null){
      this.form = formBuilder.group({
        label: ['', Validators.required],
        count: ['']
      });
    } else {
      this.form = formBuilder.group({
        uuid: [this.counter.uuid],
        label: [this.counter.label, Validators.required],
        count: [this.counter.count]
      });
    }

    // Watch the form for changes, and
    this.form.valueChanges.subscribe((v) => {
      this.isReadyToSave = this.form.valid;
    });
  }

  ionViewDidLoad() {

  }

  /**
   * The user cancelled, so we dismiss without sending data back.
   */
  cancel() {
    this.viewCtrl.dismiss();
  }

  /**
   * The user is done and wants to create the item, so return it
   * back to the presenter.
   */
  done() {
    if(!this.form.valid) { return; }
    this.viewCtrl.dismiss(this.form.value);
  }
}
