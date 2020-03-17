import { UserComponent } from './../user/user.component';
import { UserService } from './../services/user.service';
import { Component, OnInit, Input } from '@angular/core';
import { User } from '../classes/User';
import { ActivatedRoute, Router } from '@angular/router';
import { faUndoAlt, faEdit, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  private userCopy: User;
  private __user:User;
  faUndoAlt=faUndoAlt;
  faEdit=faEdit;
  faArrowAltCircleLeft=faArrowAltCircleLeft;

  @Input() set user(user: User ){
    this.__user=user;
    this.userCopy=Object.assign({},user);
  }
  get user(){
    return this.__user;
  }
  constructor(private userService :UserService,private route:ActivatedRoute, private router: Router) {  }

  ngOnInit(): void {
    
    this.user= new User();

    this.route.params.subscribe(
      (params)=>{
        this.__user =params.id? this.userService.getUser(+params.id):this.user;
      }
    );


   }

  saveUser(){
    //alert(this.user.id);
    if(this.user.id >0){
      this.userService.updateUser(this.user)
    }else{
      this.userService.createUser(this.user);
    }
    this.router.navigate(['users']);
  }
  resetFrom(form){
    if(this.user.id === 0){
        this.user =new User();
    } else{
      //form.reset();
      this.user=this.userCopy;
      }
  }
  backToUser(){  
    this.router.navigate(['users'])
   }
}
