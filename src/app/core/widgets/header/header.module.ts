import {NgModule} from '@angular/core';
import {IonicModule} from '@ionic/angular';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header.component';

@NgModule({
    exports: [HeaderComponent],
    declarations: [HeaderComponent],
    imports: [IonicModule, CommonModule ]
})
export class HeaderModule {}
