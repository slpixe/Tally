import {Page} from 'ionic-framework/ionic';
import * as dateFns from 'date-fns';

@Page({
    templateUrl: 'build/pages/counter/counter.html'
})
export class CounterPage {
    constructor() {

        this.counters = [
            {
                name: 'Test 1',
                count: 1,
                lastUpdated: null,
                sinceUpdated: null
            },
            {
                name: 'Test 2',
                count: 2,
                lastUpdated: null,
                sinceUpdated: null
            }
        ];

        console.log(this.counters[0]);

        setInterval(()=>{
            for (let counter of this.counters){
                if(counter.lastUpdated != null){
                    counter.sinceUpdated = dateFns.differenceInSeconds(Date.now(), counter.lastUpdated);
                }
            }
        }, 1000)

    }

    countIncrement(counter) {
        console.clear();
        counter.count++;

        console.log(dateFns.differenceInSeconds(Date.now(), counter.lastUpdated));

        counter.lastUpdated = Date.now(); //timestamp in seconds
        console.log(this.counters[0]);
    }
}
