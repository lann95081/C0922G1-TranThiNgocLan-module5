import {Component, OnInit} from '@angular/core';
import {Facility} from 'src/app/model/facility';
import {Contract} from '../../../model/contract';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {
  contracts: Contract[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

}
