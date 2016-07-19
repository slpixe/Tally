import {Component} from '@angular/core';
// import {Count} from './count';
import {CounterData} from '../../providers/counter-data';
import * as moment from 'moment';

@Component({
    templateUrl: 'build/pages/counter/counter.html'
})
export class CounterPage {

  counters = [];

  constructor(private countData: CounterData) {
    countData.getDefaultCounters().then(counters => {
      this.counters = counters;
    });

    let now = moment().format('LLLL');
    console.log(now);
  }

  countIncrement(counter){
    counter.count++;
  }

  addCounter(){
    // this.counters.push(
      // new Counter
    // )
  }

}
