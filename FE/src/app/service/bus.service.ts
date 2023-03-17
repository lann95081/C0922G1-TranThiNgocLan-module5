import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Bus} from '../model/bus';

@Injectable({
  providedIn: 'root'
})
export class BusService {

  constructor(private httpClient: HttpClient) {
  }

  findAll(page: number) {
    return this.httpClient.get<Bus[]>('http://localhost:8080/list?page=' + page);
  }

  delete(id: number) {
    return this.httpClient.delete('http://localhost:8080/list/' + id);
  }

  create(bus: Bus) {
    return this.httpClient.post('http://localhost:8080', bus);
  }

  update(bus: Bus) {
    return this.httpClient.put('http://localhost:8080/update', bus);
  }

  findById(id: number) {
    return this.httpClient.get<Bus>('http://localhost:3000/list/' + id);
  }
}
