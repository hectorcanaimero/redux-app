import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GetProfilePageRoutingModule } from './get-profile-routing.module';

import { GetProfilePage } from './get-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GetProfilePageRoutingModule
  ],
  declarations: [GetProfilePage]
})
export class GetProfilePageModule {}
