import { Injectable } from '@angular/core';
import { IUser } from './../Shared Classes and Types/IUser';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }
  users:IUser[]=[];
  _url='https://jsonplaceholder.typicode.com/users';

  getUsers():Observable<IUser[]>
  {
    return this.http.get<IUser[]>(this._url).pipe(map((data:IUser[])=>{
      return data.map(u =>({'name':u.name , 'username':u.username , 'email':u.email}))
    }));
    // return this.http.get<IUser[]>(this._url)
  }
}
