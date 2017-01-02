import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Uuid } from 'uuid/v4';
import { Counter } from '../models/counter';

@Injectable()
export class Counters {

  private COUNTERS_KEY: string = '_counters';

  counters: any;

  _readyPromise: Promise<any>;

  constructor(public storage: Storage) {
  }

  //load() {
  //  return this.storage.get(this.COUNTERS_KEY).then((value) => {
  //    if(value) {
  //      this.counters = value;
  //    }
  //  });
  //}

  //merge(counters: any) {
  //  for(let k in counters) {
  //    this.counters[k] = counters[k];
  //  }
  //  return this.save();
  //}

  save(counter: Counter) {
    console.log(counter);

    if(counter.getUuid() == null) {
      console.log('no uuid');
      let newUuid = Uuid();
      console.log(newUuid);
      counter.setUuid(newUuid);
    }

    //this.counters[key] = value;
    //console.log(this.counters);
    //return this.storage.set(this.COUNTERS_KEY, this.counters);
    //return this.storage.set(this.COUNTERS_KEY, value);
    //this.storage.set('name', 'Mr.Iron');
  }

  setAll(value: any) {
    //return this.storage.set(this.COUNTERS_KEY, value);
  }

  getValue(key: string) {
    //return this.storage.get(key);
  }

  store() {
    return this.setAll(this.counters);
  }

  get allcounters() {
    return 'hello';
    //return this.counters;
  }

}
