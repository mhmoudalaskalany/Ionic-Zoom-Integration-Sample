import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NonLoginPage } from './non-login.page';

const routes: Routes = [
  {
    path: '',
    component: NonLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NonLoginPageRoutingModule {}
