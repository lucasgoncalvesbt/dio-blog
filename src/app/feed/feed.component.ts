import { Component, OnInit } from '@angular/core';
import { Post } from '../model/Post';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
})
export class FeedComponent implements OnInit {
  constructor(private postService: PostService) {}

  posts: Post[];
  post: Post = new Post();

  ngOnInit(): void {
    this.findPosts();
  }

  findPosts(): void {
    this.postService.getAllPosts().subscribe((value) => {
      this.posts = value;
    });
  }

  createPost(): void {
    this.postService.createPost(this.post).subscribe((value) => {
      this.post = value;
      location.assign('/feed');
    });
  }
}
