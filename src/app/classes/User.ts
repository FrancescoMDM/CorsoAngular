import {UserInterface} from '../interfaces/user'
export class User implements UserInterface{

    id: number;   
    name: string;
    lastname: string;
    fiscalcode: string;
    email: string;
    phone: string;
    province: string;
    age: number;

    constructor(){
        this.id=0;
        this.name='';
        this.lastname='';
        this.fiscalcode='';
        this.email='';
        this.phone='';
        this.province='';
        this.age=18;
    }

}