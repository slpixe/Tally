import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Counter } from '../../models/counter';

@Injectable()
export class Counters {
  counters: Counter[] = [];

  defaultCounter: any = {
  "label": "white Cars",
  "count": 1,
  "createdAt": "2012-04-23T18:25:43.511Z",
  "modifiedAt": "2012-04-23T18:25:43.511Z",
  };


  constructor(public http: Http) {
    let counters = [
      {
         "label": "Red Cars",
         "count": 3,
         "createdAt": "2012-04-23T18:25:43.511Z",
         "modifiedAt": "2012-04-23T18:25:43.511Z"
       },
       {
       "label": "Blue Cars",
       "count": 2,
       "createdAt": "2012-04-23T18:25:43.511Z",
       "modifiedAt": "2012-04-23T18:25:43.511Z"
       },
       {
       "label": "Silver Cars",
       "count": 10,
       "createdAt": "2012-04-23T18:25:43.511Z",
       "modifiedAt": "2012-04-23T18:25:43.511Z"
       },
       {
       "label": "Green Cars",
       "count": 0,
       "createdAt": "2012-04-23T18:25:43.511Z",
       "modifiedAt": "2012-04-23T18:25:43.511Z"
       },
       {
       "label": "Black Cars",
       "count": 20,
       "createdAt": "2012-04-23T18:25:43.511Z",
       "modifiedAt": "2012-04-23T18:25:43.511Z"
       }
     ];

     //for(let counter of counters) {
    //   this.counters.push(new Counter(counter));
    // }
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

  add(counter: Counter) {
    this.counters.push(counter);
  }

  delete(counter: Counter) {
    this.counters.splice(this.counters.indexOf(counter), 1);
  }
}
