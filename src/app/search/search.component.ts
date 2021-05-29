import { Component, OnInit } from '@angular/core';
import { events } from '../events';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  events = events;
  searchText;

  constructor() { }

  ngOnInit() {
  }

}