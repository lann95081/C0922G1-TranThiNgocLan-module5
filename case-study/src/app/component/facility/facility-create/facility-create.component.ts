import {Component, OnInit} from '@angular/core';
import {FacilityType} from 'src/app/model/facility-type';
import {RentType} from '../../../model/rent-type';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FacilityService} from '../../../service/facility.service';
import {FacilityTypeService} from '../../../service/facility-type.service';
import {RentTypeService} from '../../../service/rent-type.service';
import {Router} from '@angular/router';
import {Facility} from '../../../model/facility';

@Component({
  selector: 'app-facility-create',
  templateUrl: './facility-create.component.html',
  styleUrls: ['./facility-create.component.css']
})
export class FacilityCreateComponent implements OnInit {
  rentType: RentType[] = [];
  facilityType: FacilityType[] = [];
  idCheck = 0;
  mess: string;

  reactiveForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl('', [Validators.required]),
    area: new FormControl('', [Validators.required]),
    cost: new FormControl('', [Validators.required]),
    maxPeople: new FormControl('', [Validators.required]),
    standardRoom: new FormControl('', [Validators.required, Validators.min(0), Validators.max(1)]),
    otherConvenience: new FormControl(),
    pollArea: new FormControl(''),
    numberFloors: new FormControl(),
    rentType: new FormControl(null, [Validators.required]),
    facilityType: new FormControl(null, [Validators.required]),
  });


  constructor(private router: Router, private rentTypeService: RentTypeService, private facilityTypeService: FacilityTypeService
    , private facilityService: FacilityService) {
  }

  ngOnInit(): void {
// @ts-ignore
    this.facilityTypeService.getAll().subscribe(data => {
      this.facilityType = data;
    });
    // @ts-ignore
    this.rentTypeService.getAll().subscribe(data => {
      this.rentType = data;
    });
  }

  create() {
    let facility: Facility;
    facility = this.reactiveForm.value;
    if (this.reactiveForm.valid) {
      const temp = this.facilityService.save(facility).subscribe(ok => {
        if (ok && temp != null) {
          alert('thêm mới thành công');
        }
        this.router.navigateByUrl('/facility');
      });
    } else {
      alert('Vui lòng kiểm tra lại thông tin');
    }

  }

  checkPool(poolArea: string) {
    if (this.idCheck === 1) {
      this.mess = 'Dành cho Villa';
    }
    if (poolArea === '' || poolArea == null) {
      if (this.idCheck === 1) {
        this.reactiveForm.controls.poolArea.setErrors({nullPoolArea: true});
      }
    }

  }

  checkFloor(floor: string) {
    if (this.idCheck === 1 || this.idCheck === 2) {
      this.mess = 'Dành cho Villa và House ';
    }
    if (floor === '' || floor === null) {
      if (this.idCheck === 1 || this.idCheck === 2) {
        this.reactiveForm.controls.numberOfFloors.setErrors({nullFloor: true});
      }
    }

  }

  checkFacilityType() {
    this.idCheck = this.reactiveForm.controls.facilityType.value;
  }
}
