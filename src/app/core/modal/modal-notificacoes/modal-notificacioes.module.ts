import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ModalNotificacoesComponent } from './modal-notificacoes.component';

import { HTTP_INTERCEPTORS } from '@angular/common/http';


@NgModule({
  exports: [ModalNotificacoesComponent],
  declarations: [ModalNotificacoesComponent],
  entryComponents: [ModalNotificacoesComponent],
  imports: [
    IonicModule,
    CommonModule,

  ],
})
export class ModalNotificacoesModule { }
