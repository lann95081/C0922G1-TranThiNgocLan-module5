import {Component, OnInit} from '@angular/core';
import {BusService} from '../../service/bus.service';
import {Bus} from '../../model/bus';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  busList: Bus[];
  bus: Bus = {};

  constructor(private busService: BusService) {
  }

  ngOnInit(): void {
    this.getAll(0);
  }

  getAll(page: number) {
    this.busService.findAll(page).subscribe(data => {
      this.busList = data;
    });
  }

  delete() {
    this.busService.delete(this.bus.id).subscribe(data => {
      this.getAll(0);
      alert('Xoa thanh cong');
    });
  }

}
