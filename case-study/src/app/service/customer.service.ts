import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>('http://localhost:3000/customer');
  }

  save(customer: Customer): Observable<Customer> {
    return this.httpClient.post<Customer>('http://localhost:3000/customer', customer);
  }

  findById(id: number) {

    return this.httpClient.get('http://localhost:3000/customer' + id);
  }

  edit(customer: Customer) {
    return this.httpClient.patch('http://localhost:3000/customer' + customer.id, customer);
  }


  delete(id: number | undefined): Observable<Customer[]> {
    return this.httpClient.delete<Customer[]>('http://localhost:3000/customer' + id);
  }

  search(name: string, customerType: string): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>('http://localhost:3000/customer?name_like&customerType.name_like=' + name + customerType);
  }
}
