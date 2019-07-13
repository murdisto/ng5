import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  itemCount: number; //interpolation
  btnText: string = 'Add an item'; //one-way data binding / property binding. see html template for <p> element
  itemText: string = 'My first item'; //two-way data binding. see template <input> element. requires formsModule in app.module
  items = []; //array to hold items added by user

  constructor(private _data: DataService) { }

  ngOnInit() {
    this._data.item.subscribe(res => this.items = res); // no idea what this is doing
    this.itemCount = this.items.length; //set item count when page loads
    this._data.changeItem(this.items); //call the changeItem method that's in data.service
  }
  
  addItem() {
    //when add item button is pushed do this:
    this.items.push(this.itemText); //add the new item to the items array
    this.itemText = ''; //clear out the input field
    this.itemCount = this.items.length; //update the item count
    this._data.changeItem(this.items); //call the changeItem method that's in data.service
  }
  
  removeItem(i) {
    this.items.splice(i, 1);
    this.itemCount = this.items.length;
    this._data.changeItem(this.items); //call the changeItem method that's in data.service
  }
  

}
