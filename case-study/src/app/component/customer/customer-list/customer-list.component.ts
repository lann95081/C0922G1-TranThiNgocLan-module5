import {Component, OnInit} from '@angular/core';
import {Customer} from '../../../model/customer';
import {CustomerService} from '../../../service/customer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: Customer[] = [];
  private removeCustomer: Customer;

  constructor(private customerService: CustomerService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  deleteCustomer() {
    const temp = this.customerService.delete(this.removeCustomer.id).subscribe(data => {
      if (temp != null) {
        alert('Đã xóa thành công');
        this.ngOnInit();
      } else {
        alert('xóa không thành công');
      }
      this.router.navigateByUrl('/customer');
    });
  }

}
