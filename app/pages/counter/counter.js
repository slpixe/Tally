import {Page} from 'ionic-framework/ionic';

@Page({
    templateUrl: 'build/pages/counter/counter.html'
})
export class CounterPage {
    constructor() {

    }

    countIncrement(){
        console.log(this);
    }
}
