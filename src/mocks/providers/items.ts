import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
  "label": "white Cars",
  "count": 1,
  "createdAt": "2012-04-23T18:25:43.511Z",
  "modifiedAt": "2012-04-23T18:25:43.511Z",
  };


  constructor(public http: Http) {
    let items = [
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

     for(let item of items) {
       this.items.push(new Item(item));
     }
  }

  query(params?: any) {
    if(!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for(let key in params) {
        let field = item[key];
        if(typeof field == 'string' && field.toLowerCase().indexOf(params[key]) >= 0) {
          return item;
        } else if(field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
