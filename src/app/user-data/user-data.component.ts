import { UserService } from './../services/user.service';
import { User } from './../classes/User';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {  faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

 user:User;
 faArrowAltCircleLeft=faArrowAltCircleLeft;

  constructor( private route:ActivatedRoute, private uerservice:UserService,private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(

      (p) =>{ 
        alert(p.id);
        this.user = this.uerservice.getUser(+p.id);
      }
      );
   }
   backToUser(){  
     this.router.navigate(['users'])
    }

}
