import {Component, OnInit} from '@angular/core';
import {BusType} from '../../model/bus-type';
import {FormControl, FormGroup} from '@angular/forms';
import {Bus} from '../../model/bus';
import {ActivatedRoute, Router} from '@angular/router';
import {BusService} from '../../service/bus.service';
import {BusTypeService} from '../../service/bus-type.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  busTypeList: BusType[] = [];

  editForm: FormGroup = new FormGroup({
    id: new FormControl(),
    busNumber: new FormControl(),
    garageName: new FormControl(),
    phone: new FormControl(),
    email: new FormControl(),
    timeGo: new FormControl(),
    timeOut: new FormControl(),
    startGo: new FormControl(),
    endGo: new FormControl(),
    busType: new FormControl()
  });

  public compareWith(object1: Bus, object2: Bus) {
    return object1 && object2 ? object1.id === object2.id : object1 === object2;
  }

  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private busService: BusService, private busTypeService: BusTypeService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(data => {
      const id = +data.get('id');
      this.getMedicalRecord(id);
    });

    this.busTypeService.findAll().subscribe(data => {
      this.busTypeList = data;
    });

  }

  ngOnInit(): void {
  }

  getMedicalRecord(id: number) {
    this.busService.findById(id).subscribe(data => {
      this.editForm.patchValue(data);
    });
  }

  edit() {
    const bus = this.editForm.value;
    this.busService.update(bus).subscribe(data => {
      this.router.navigateByUrl('');
      alert('Chỉnh Sửa Thành Công');
    });
  }
}
