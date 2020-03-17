import { UserService } from './../services/user.service';
import { User } from './../classes/User';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

 user:User;

  constructor( private route:ActivatedRoute, private uerservice:UserService) { }

  ngOnInit(): void {
    this.route.params.subscribe(

      (p) =>{ 
        alert(p.id);
        this.user = this.uerservice.getUser(+p.id);
      }
      );
   }

}
