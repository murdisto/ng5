import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
    this.itemCount = this.items.length; //set item count when page loads
  }
  
  addItem() {
    //when add item button is pushed do this:
    this.items.push(this.itemText); //add the new item to the items array
    this.itemText = ''; //clear out the input field
    this.itemCount = this.items.length; //update the item count
  }
  

}
