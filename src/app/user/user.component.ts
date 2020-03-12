import { UserService } from './../services/user.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../interfaces/user';

@Component({
  // inputs:[
  //   'user:user-data'
  // ],
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

@Input("user-data") user: User;
@Output('onDeleteUser') userDeleted = new EventEmitter();
//@Output('onSelectUser') onSelectUser = new EventEmitter<User>();

  constructor(private userservice: UserService) { }

  ngOnInit(): void {
  }
  deleteUser(){
    this.userDeleted.emit(this.user);
    //this.userservice.deleteUser(this.user);
  }
  //updateUser(){
    //this.onSelectUser.emit(this.user);
    //this.userservice.deleteUser(this.user);
  //}
}
