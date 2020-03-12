import { UserService } from './../services/user.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../classes/User';

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
@Output('onSelectUser') onSelectUser = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  deleteUser(){
    this.userDeleted.emit(this.user);
    
    //this.userservice.deleteUser(this.user);
  }
  updateUser(){
    this.onSelectUser.emit(this.user);
    //this.userservice.deleteUser(this.user);
  }
  prova(){
    alert(this.user);
  }
}
