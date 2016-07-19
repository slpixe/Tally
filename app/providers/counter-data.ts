import {Injectable} from '@angular/core';
import {Storage, LocalStorage, Events} from 'ionic-angular';
import {Http} from '@angular/http';

@Injectable()
export class CounterData {
  data: any;

  constructor(private http: Http) {}

  load(){
    if (this.data) {
      // already loaded data
      return Promise.resolve(this.data);
    }

    // don't have the data yet
    return new Promise(resolve => {
      // We're using Angular Http provider to request the data,
      // then on the response it'll map the JSON data to a parsed JS object.
      // Next we process the data and resolve the promise with the new data.
      this.http.get('data/default-counters.json').subscribe(res => {
        // we've got back the raw data, now generate the core schedule data
        // and save the data for later reference
        resolve(res.json());
      });
    });

  }

  getDefaultCounters() {
    return this.load().then(data => {
      return data.counters;
    });
  }

}
