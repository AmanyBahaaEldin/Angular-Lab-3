import { Component, OnInit } from '@angular/core';
import { PostsService } from './../services/posts.service';
import { IPosts } from './../Shared Classes and Types/IPosts';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor(private postsService:PostsService) { }
  posts:IPosts[]=[];


  ngOnInit(): void {
    this.postsService.getPosts().subscribe(data=>{
      this.posts=data;
    })
  }
  getPOSTs(){
    return this.posts;
  }
}
