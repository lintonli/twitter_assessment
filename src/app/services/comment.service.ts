import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IComment } from '../Models/comment';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private readonly BaseUrl = 'https://jsonplaceholder.typicode.com/comments';
  constructor(private http: HttpClient) {}
  getCommentbyPostId(postId:number):Observable<IComment[]>{
    return this.http.get<IComment[]>(`${this.BaseUrl}?postId=${postId}`);
  }
}
