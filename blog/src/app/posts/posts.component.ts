import { Component } from '@angular/core';
import { Post } from './shared/post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent  {
  posts : Post[] = [];
  
  createPost(post:Post) {
    this.posts.push(post);
    console.log("create post");
  }
}
