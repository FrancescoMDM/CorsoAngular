import { UserService } from './../services/user.service';
import { Component, OnInit, Output } from '@angular/core';
import { User } from '../interfaces/user';
import { EventEmitter } from 'protractor';


@Component({
    selector:'app-users',
    templateUrl :'./users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{

    title = 'Users';
    users: User[] =[];
    //  @Output() updateUser = new EventEmitter(); 

    constructor(private service: UserService){

    }

    ngOnInit(): void {
        this.users=this.service.getUsers();
    }
    onDeleteUser(user: User){
        this.service.deleteUser(user);
      }
      // onSelectUser(user){
      //   this.updateUser.emit(user);
      // }

}