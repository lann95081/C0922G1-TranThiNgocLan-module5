import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Facility} from '../model/facility';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacilityService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Facility[]> {
    return this.httpClient.get<Facility[]>('http://localhost:3000/facility');
  }

  save(facility: Facility): Observable<Facility> {
    return this.httpClient.post<Facility>('http://localhost:3000/facility', facility);
  }

  findById(id: number) {
    return this.httpClient.get('http://localhost:3000/facility' + id);
  }

  delete(id: number | undefined): Observable<Facility[]> {
    return this.httpClient.delete<Facility[]>('http://localhost:3000/facility' + id);
  }
}
