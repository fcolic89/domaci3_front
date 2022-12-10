import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CreateUserComponent } from './create-user/create-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { LoginComponent } from './login/login.component';
import { ReadUsersComponent } from './read-users/read-users.component';

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: "read",
    component: ReadUsersComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "edit/:id",
    component: EditUserComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "create",
    component: CreateUserComponent,
    canActivate: [AuthGuard]
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
