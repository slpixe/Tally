import {Page} from 'ionic-framework/ionic';

@Page({
    templateUrl: 'build/pages/counter/counter.html'
})
export class CounterPage {
    constructor() {

        this.counters = [
            {
                name: 'Test 1',
                count: 1
            },
            {
                name: 'Test 2',
                count: 2
            }
        ]

        console.log(this.counters);

    }

    countIncrement(counter) {
        //console.log(this);
        counter.count++;
    }
}
