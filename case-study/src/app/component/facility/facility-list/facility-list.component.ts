import { Component, OnInit } from '@angular/core';
import {Facility} from '../../../model/facility';

@Component({
  selector: 'app-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {

  facilities: Facility[];

  constructor() { }

  ngOnInit(): void {
  }

}
