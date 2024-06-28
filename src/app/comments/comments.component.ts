import { Component, Input, OnInit } from '@angular/core';
import { IComment } from '../Models/comment';
import { CommentService } from '../services/comment.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})
export class CommentsComponent implements OnInit{
  @Input() postId!:number
  comments:IComment[]=[]
  constructor(private commentService:CommentService){}
ngOnInit(): void {
  if (this.postId) {
    this.commentService
      .getCommentbyPostId(this.postId).subscribe((comments:IComment[])=>{
        this.comments=this.comments;
    })
      
  }
}
}
