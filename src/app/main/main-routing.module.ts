import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from '../auth/guards/login.guard';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [LoginGuard],
    component: IndexComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
