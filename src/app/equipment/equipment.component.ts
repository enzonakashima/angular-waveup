import { Component, OnInit } from '@angular/core';
import { equipment } from '../equipment';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
  equipment = equipment;

  constructor() {}

  ngOnInit() {}
}
