import { UserService } from './../services/user.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../classes/User';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';


@Component({
    selector:'app-users',
    templateUrl :'./users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{

    ;

    title = 'Users';
    users: User[] =[];
    @Output() updateUser = new EventEmitter<User>();
    //  @Output() updateUser = new EventEmitter(); 

    constructor(private service: UserService){

    }

    ngOnInit(): void {
        this.users=this.service.getUsers();
    }
    onDeleteUser(user: User){
        this.service.deleteUser(user);
      }
       onSelectUser(user: User){
           //alert(user.email);
           const userCopy= Object.assign({},user);
         this.updateUser.emit(userCopy);
       }

}