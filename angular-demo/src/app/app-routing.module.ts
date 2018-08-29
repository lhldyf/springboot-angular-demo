import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './user/users/users.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { LoginComponent } from './user/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'users', component: UsersComponent},
  { path: 'user/:id', component: UserDetailComponent},
  { path: 'login', component: LoginComponent}
]

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
