import { Component, Input } from '@angular/core';
import { Post } from '../Models/post';
import { PostService } from '../services/post.service';
import { CommonModule } from '@angular/common';
import { UserService } from '../services/user.service';
import { CommentsComponent } from '../comments/comments.component';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule, CommentsComponent],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css',
})
export class PostsComponent {
  @Input() userId!: number;
  selectedPostId!: number;
  posts: Post[] = [];

  constructor(
    private postService: PostService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    if (this.userId) {
      this.postService
        .getPostsByUserId(this.userId)
        .subscribe((posts: Post[]) => {
          this.posts = posts;
        });
    }
  }

  toggleComments(postId: number): void {
    if (this.selectedPostId === postId) {
      console.log("is null")
    } else {
      this.selectedPostId = postId;
    }
  }
}
