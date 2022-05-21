import { Injectable } from '@angular/core';
import { IUser } from './../Shared Classes and Types/IUser';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }
  users:IUser[]=[];
  _url='https://jsonplaceholder.typicode.com/users';

  getUsers():Observable<IUser[]>
  {
    return this.http.get<IUser[]>(this._url);
  }
}
