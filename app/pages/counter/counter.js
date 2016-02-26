import {Page} from 'ionic-framework/ionic';
import * as dateFns from 'date-fns';
import {Count} from './count';

@Page({
    templateUrl: 'build/pages/counter/counter.html'
})
export class CounterPage {
    constructor() {

        this.counters = [
            new Count('Test 1', 2),
            new Count('Test 2', 5)
        ];

        setInterval(()=>{
            for (let counter of this.counters){
                if(counter.lastUpdated != null){
                    counter.sinceUpdated = dateFns.differenceInSeconds(Date.now(), counter.lastUpdated);
                }
            }
        }, 1000);

        //let counts = [
        //    new Count('name 1', 5),
        //    new Count('name 2', '10')
        //];
        //console.log(counts);

    }

    countIncrement(counter) {
        console.clear();
        counter.count++;
        counter.lastUpdated = Date.now();

        console.log(this.counters[0]);
    }
}
