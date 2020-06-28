import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NonLoginPageRoutingModule } from './non-login-routing.module';

import { NonLoginPage } from './non-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NonLoginPageRoutingModule
  ],
  declarations: [NonLoginPage]
})
export class NonLoginPageModule {}
