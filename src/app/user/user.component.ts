import { UserService } from './../services/user.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../classes/User';
import { Router } from '@angular/router';
import { faCoffee, faPencilRuler, faInfo, faTrash } from '@fortawesome/free-solid-svg-icons';

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

faTrash=faTrash;
faInfo=faInfo;
faPencilRuler=faPencilRuler;

  constructor(private userService:UserService, private route:Router ) { }

  ngOnInit(): void {
  }
  deleteUser(){
    this.userDeleted.emit(this.user);
    
    //this.userservice.deleteUser(this.user);
  }
  updateUser(){
    this.route.navigate(['users',this.user.id,'edit']);
    this.onSelectUser.emit(this.user);
    //this.userservice.deleteUser(this.user);
  }
  showUserDetail(){
    this.route.navigate(['users',this.user.id]);
  }
}
