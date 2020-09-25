import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User } from '../_models/user';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.apiUrl;
  users: User[];

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl + 'users');
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(this.baseUrl + 'users/' + id);
  }
}
