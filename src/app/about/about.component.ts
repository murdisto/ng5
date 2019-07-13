import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  items: any;

  constructor(private _data: DataService) { 
  
  }

  ngOnInit() {
    this._data.item.subscribe(res => this.items = res);
  }

}