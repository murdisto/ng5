import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()

export class DataService {
  
  private items = new BehaviorSubject<any>(['The first item', 'Another item']);
  item = this.items.asObservable();


  constructor() { }
  
  changeItem(item) {
    this.items.next(item);
  }

}
