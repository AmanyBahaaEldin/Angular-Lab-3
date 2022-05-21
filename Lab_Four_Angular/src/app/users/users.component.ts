import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { IUser } from './../Shared Classes and Types/IUser';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private userService:UsersService) { }
  users:IUser[]=[];
  ngOnInit(): void {
    this.userService.getUsers().subscribe(data=>{
      this.users=data;
    })
  }
  getUSers(){
    return this.users;
  }

}
