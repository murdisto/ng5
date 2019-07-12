import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  itemCount: number = 4; //interpolation
  btnText: string = 'Add an item'; //one-way data binding / property binding. see html template for <p> element
  itemText: string = 'My first item'; //two-way data binding. see template <input> element. requires formsModule in app.module

  constructor() { }

  ngOnInit() {
  }

}
