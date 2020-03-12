import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable()
export class UserService{
    //Array<User>
     users:User[] =[
        {
            name:'Francesco Maria',
            lastname:'De Magistris',
            fiscalcode:'DMGFNC01C22F839T',
            email:'francesco@mail.com',
            phone:'3661393177',
            province:'Napoli',
            age:19,
        },
        {
            name:' Maria',
            lastname:'Milone',
            fiscalcode:'MAGCRI10R17M472G',
            email:'marianilone74@mail.com',
            phone:'3661393177',
            province:'Napoli',
            age:45
        }
    ];
    
constructor(){

}

    getUsers(){
        return this.users;
    }
    deleteUser(user){
        let index= this.users.indexOf(user);
        if(index>=0){
        this.users.splice(index,1);
    }
    }
}