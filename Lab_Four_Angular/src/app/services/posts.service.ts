import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IPosts } from './../Shared Classes and Types/IPosts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http:HttpClient) { }
  posts:IPosts[]=[];
  _url='https://jsonplaceholder.typicode.com/posts';

  getPosts():Observable<IPosts[]>
  {
    return this.http.get<IPosts[]>(this._url).pipe(map((data:IPosts[])=>{
      return data.map(post =>({'id':post.id , 'title':post.title , 'body':post.body}))
    }));
    // return this.http.get<IUser[]>(this._url)
  }

}
