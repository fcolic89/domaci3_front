import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
