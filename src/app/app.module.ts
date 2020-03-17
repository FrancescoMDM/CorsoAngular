import { RouterModule,Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { UserService } from './services/user.service';
import { UserDetailComponent } from './user-detail/user-detail.component';
import {FormsModule} from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavComponent } from './nav/nav.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ModalBasicComponent } from './modal-basic/modal-basic.component';
import '@angular/localize/init';
import { UserDataComponent } from './user-data/user-data.component';
//import { AngularFontAwesomeModule } from 'angular-font-awesome';

const routes: Routes = [
{
  path:'users',
  component: UsersComponent
},
{
  path:' ',
  pathMatch:'full',
  redirectTo:'users'
},
{
  //UserDetailComponent
  path:'users/new',
  component: UserDetailComponent
},
{
  path:'users/:id/edit',
  component: UserDetailComponent
},
{
  //UserDetailComponent
  path:'users/:id',
  component: UserDataComponent
}
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    UserDetailComponent,
    NavComponent,
    ModalBasicComponent,
    UserDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    NgbModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
