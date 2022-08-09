import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogoutGuard } from './guards/logout.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'login',
    canActivate: [LogoutGuard],
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
