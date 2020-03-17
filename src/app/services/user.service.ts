import { User } from './../classes/User';
import { Injectable } from '@angular/core';
import { UserInterface } from '../interfaces/user';

@Injectable()
export class UserService{
    //Array<User>
     users:User[] =[
        {
            id:1,
            name:'Francesco Maria',
            lastname:'De Magistris',
            fiscalcode:'DMGFNC01C22F839T',
            email:'francesco@mail.com',
            phone:'3661393177',
            province:'Napoli',
            age:19,
        },
        {
            id:2,
            name:' Maria',
            lastname:'Milone',
            fiscalcode:'MAGCRI10R17M472G',
            email:'marianilone74@mail.com',
            phone:'3661393177',
            province:'Napoli',
            age:45
        }
    ];
    
    constructor(){}

    getUsers(){
        return this.users;
    }

    getUser(id:number){
        return this.users.find( user => user.id === id);
    }

    deleteUser(user){
        let index= this.users.indexOf(user);
            if(index>=0){
                this.users.splice(index,1);
            }
    }
    updateUser(user: UserInterface){
        const idx= this.users.findIndex((v) => v.id === user.id);
        alert(idx);
        if(idx !== -1){
            this.users[idx] = user;
        }
    }
    createUser(user: UserInterface){
        this.users.splice(0,0,user);
    }
    
}