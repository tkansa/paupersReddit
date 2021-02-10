import { Component, OnInit } from '@angular/core';

// import the service
import { AwwService } from '../aww.service'


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers:[AwwService]
})
export class PostsComponent implements OnInit {

  // inject the service into the constructor
  constructor(public awwService: AwwService) { }

  // in oninit is a good place to call your function to get the posts from the service
  ngOnInit(): void {
      // oninit is a good place to call the function in your service to get the posts
       this.awwService.getPosts();
  }

}
