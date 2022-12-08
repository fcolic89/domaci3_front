import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditUserComponent } from './edit-user/edit-user.component';
import { LoginComponent } from './login/login.component';
import { ReadUsersComponent } from './read-users/read-users.component';

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "read",
    component: ReadUsersComponent
  },
  {
    path: "edit/:id",
    component: EditUserComponent
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
