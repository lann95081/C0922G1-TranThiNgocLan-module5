import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BusType} from '../model/bus-type';

@Injectable({
  providedIn: 'root'
})
export class BusTypeService {

  constructor(private httpClient: HttpClient) {
  }

  findAll() {
    return this.httpClient.get<BusType[]>('http://localhost:8080/bus-type');
  }
}
