import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Todos } from '../interfaces/todos';

@Injectable({
  providedIn: 'root'
})
export class IndexService {

  private todos = 'todos';

  constructor(private http: HttpClient, private router: Router) { }

  getTodos(): Observable<Todos[]> {
    return this.http.get<Todos[]>(`todos`);
  }
}
