import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly Base_Url = 'https://jsonplaceholder.typicode.com/users/';
  constructor(private http: HttpClient) {}
  getUser(id: number): Observable<User> {
    return this.http.get<User>(this.Base_Url + id);
  }
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.Base_Url);
  }
  
}
