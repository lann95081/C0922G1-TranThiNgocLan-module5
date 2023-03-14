import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Todo} from '../todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>('http://localhost:3000/todo');
  }

  deleteTodo(id: number): Observable<Todo> {
    return this.httpClient.delete<Todo>('http://localhost:3000/todo/' + id);
  }
}
