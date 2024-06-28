import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../Models/post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private readonly BaseUrl = 'https://jsonplaceholder.typicode.com/posts/';
  constructor(private http: HttpClient) {}

  getPostsByUserId(userId: number): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.BaseUrl}?userId=${userId}`);
  }
}
