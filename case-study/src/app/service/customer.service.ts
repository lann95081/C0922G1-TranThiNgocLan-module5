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
    return this.httpClient.get<Customer[]>('http://localhost:3000/customers');
  }

  save(customer: Customer): Observable<Customer> {
    return this.httpClient.post<Customer>('http://localhost:3000/customers', customer);
  }

  findById(id: number) {

    return this.httpClient.get('http://localhost:3000/customers' + id);
  }

  edit(customer: Customer) {
    return this.httpClient.patch('http://localhost:3000/customers' + customer.id, customer);
  }

  delete(id: number) {
    return this.httpClient.delete('http://localhost:3000/customers' + id);
  }
}
