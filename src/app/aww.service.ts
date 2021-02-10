import { Injectable } from '@angular/core';

// import the HTTP stuffs
import { HttpClient } from '@angular/common/http';

// make an interface for a post
interface RedditPost {
  title: string;
  url: string;
  thumbnail: string;
}

@Injectable({
  providedIn: 'root',
})
export class AwwService {

  // create the link string to the API
  apiUrl: string = 'https://www.reddit.com/r/aww/.json';

  // make an array of posts to hold them
  public redditPosts : RedditPost[] = [];

  // inject the HttpClient into the constructor
  constructor(private http: HttpClient) {}

  getPosts() {
   
    this.http.get(this.apiUrl).subscribe(
      (response: any) => {
        
        // store the response from the API in a variable
        const posts = response.data.children;

        // loop over the posts to map them onto the interface
        for(let post of posts){         
          let redditPost: RedditPost = {
            title: post.data.title,
            url: "https://reddit.com" + post.data.permalink,
            thumbnail: post.data.thumbnail
          };
          // add them to the array
          this.redditPosts.push(redditPost);                  

        }       
      },
      (error) => {console.log(error)}
    );
  }
}
