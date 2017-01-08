import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Counter } from '../models/counter';

@Injectable()
export class Counters {

  private COUNTERS_KEY: string = '_counters';

  counters: Counter[] = [];

  _readyPromise: Promise<any>;

  constructor(public storage: Storage) {
    this.load();
  }

  getByUuid(uuid: number) {
    return this.counters.find(c => c.uuid === uuid);
  }

  load() {
    return this.storage.get(this.COUNTERS_KEY).then((value) => {
      if(value) {
        this.counters = value;
      }
    });
  }

  save(counter: Counter) {

    //wish this worked instead
    //this.counters[counter.getUuid()] = counter;

    if(counter.uuid == null) {
      console.log('no uuid');
      let newUuid = Date.now();
      counter.uuid = newUuid;
      this.counters.push(counter);
    } else {
      //let original = this.query({uuid: counter.uuid});
      let original = this.getByUuid(counter.uuid);
      if(original) Object.assign(original, counter);
    }

    return this.storage.set(this.COUNTERS_KEY, this.counters);
  }

  query(params?: any) {
    if(!params) {
      return this.counters;
    }

    return this.counters.filter((counter) => {
      for(let key in params) {
        let field = counter[key];
        if(typeof field == 'string' && field.toLowerCase().indexOf(params[key]) >= 0) {
          return counter;
        } else if(field == params[key]) {
          return counter;
        }
      }
      return null;
    });
  }

  get allCounters() {
    return this.counters;
  }

  private clone(object: any){
    // hack
    return JSON.parse(JSON.stringify(object));
  }

}
