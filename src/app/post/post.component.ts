// import the Input decorator
import { Component, OnInit, Input } from '@angular/core';

// import the single post interface
import { Post } from '../interfaces/posts'

interface RedditPost {
  title: string;
  url: string;
  thumbnail: string;
}

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  // give the component a single post property which will be input from the parent
  @Input() post: RedditPost;

  constructor() { }

  ngOnInit(): void {}
  

}
