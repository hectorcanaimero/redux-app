import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';
import { MenuPageRoutingModule } from './menu-routing.module';
import { HeaderModule } from '@core/widgets/header/header.module';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HeaderModule,
        MenuPageRoutingModule,
    ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
