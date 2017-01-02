import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Counter } from '../models/counter';

@Injectable()
export class Counters {

  private COUNTERS_KEY: string = '_counters';

  counters: any = [];

  _readyPromise: Promise<any>;

  constructor(public storage: Storage) {
    this.load();
  }

  load() {
    return this.storage.get(this.COUNTERS_KEY).then((value) => {
      if(value) {
        this.counters = value;
      }
    });
  }

  save(counter: Counter) {

    if(counter.getUuid() == null) {
      console.log('no uuid');
      let newUuid = Date.now();
      counter.setUuid(newUuid);
    }

    this.counters[counter.getUuid()] = counter;
    return this.storage.set(this.COUNTERS_KEY, this.counters);
  }

}
