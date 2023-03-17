import {Component, OnInit} from '@angular/core';
import {BusType} from '../../model/bus-type';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {BusService} from '../../service/bus.service';
import {BusTypeService} from '../../service/bus-type.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  busTypeList: BusType[] = [];

  formCreate: FormGroup = new FormGroup({
    id: new FormControl(),
    code: new FormControl(),
    startDay: new FormControl(),
    endDay: new FormControl(),
    reason: new FormControl(),
    treatmentOption: new FormControl(),
    doctor: new FormControl(),
    patient: new FormControl()
  });

  constructor(private router: Router, private busService: BusService, private busTypeService: BusTypeService) {
    this.busTypeService.findAll().subscribe(data => {
      this.busTypeList = data;
    });
  }

  ngOnInit(): void {
  }

  create() {
    this.busService.create(this.formCreate.value).subscribe(data => {
      this.router.navigateByUrl('');
      alert('Thêm mới thành công');
    });
  }

}
