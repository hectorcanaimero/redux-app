import { Component, OnInit } from '@angular/core';
import {LoadingController, ModalController, NavController, NavParams} from '@ionic/angular';
// import {ObjectHandleService} from '../../helpers/object-handle.service';
// import * as moment from 'moment';
// import {FcmService} from '../../services/fcm.service';
// import {PushNotifications} from '../../interfaces/pushNotifications';
// import {CapacitorStorageService} from '../../services/capacitor-storage.service';
// import {take} from 'rxjs/operators';
// import {MiddlewareService} from "../../services/middleware.service";
@Component({
  selector: 'app-modal-notificacoes',
  templateUrl: './modal-notificacoes.component.html',
  styleUrls: ['./modal-notificacoes.component.scss'],
})
export class ModalNotificacoesComponent implements OnInit {
  // notificacoes = [
  //   {
  //     message: 'Fernando, gaste seu troco de volta! ',
  //     tipoOferta: 'troco-de-volta',
  //     data: '2021-02-22'
  //   },
  //   {
  //     message: 'Temos dinheiro de volta para você',
  //     tipoOferta: 'dinheiro-de-volta',
  //     data: '2021-01-20'
  //   },
  //   {
  //     message: 'Chegaram ofertas para você',
  //     tipoOferta: 'clube',
  //     data: '2021-02-20'
  //   },
  //       ];
  notificacoes: any;
  temNotificacao;
  constructor(
    private modalCtrl: ModalController,
              // private objectHandleService: ObjectHandleService,
              // private nav: NavParams,
              // private loadingCtrl: LoadingController,
              // private capacitorStorageService: CapacitorStorageService,
              // private middlewareService: MiddlewareService,
              // public fcmService: FcmService
  ) { }

  ngOnInit() {
    // const tempoNotificacaoAtual = moment().format('yyyy-MM-DD');
    // // console.log('tempoNotificacaoAtual', tempoNotificacaoAtual);
    // this.carregarNotificacoes();
  }
  onClose = () => this.modalCtrl.dismiss();
  // async carregarNotificacoes() {
  //   const loading = await this.loadingCtrl.create();
  //   loading.present();
  //   const user = await this.capacitorStorageService.getObject('_user');
  //   this.middlewareService.historicoPush(user.token).pipe(take(1)).subscribe(res => {
  //     this.notificacoes = res;
  //     loading.dismiss();
  //     this.notificacoes?.length > 0 ? this.temNotificacao = true : this.temNotificacao = false;
  //   }, error => {
  //     loading.dismiss();
  //     this.temNotificacao = false;
  //   });
  //   //
  //   // this.capacitorStorageService.getNotifications$().pipe(take(1)).subscribe(notificacoesSalvas => {
  //   //
  //   //   if (notificacoesSalvas) {
  //   //     this.notificacoes = this.objectHandleService.sortArrayDescending(notificacoesSalvas.todos, 'data');
  //   //     this.notificacoes = this.notificacoes.filter(notificacaoAtual =>
  //   //         notificacaoAtual.titulo !== null && notificacaoAtual.titulo !== undefined  &&
  //   //         notificacaoAtual.mensagem !== null && notificacaoAtual.mensagem !== undefined );
  //   //   } else {
  //   //     this.notificacoes = false;
  //   //   }
  //   //   console.log(' this.notificacoes', this.notificacoes);
  //   //   console.log(' notificacoesSalvas', notificacoesSalvas);
  //   // });
  //   //
  // }
  // tempoNotificacao(dataNotificacao: number): string {
  //   const tempoNotificacaoAtual = moment().diff(moment(dataNotificacao * 1000), 'days');
  //   // console.log('tempoNotificacaoAtual', tempoNotificacaoAtual);
  //   if (tempoNotificacaoAtual === 0) {
  //     return 'Hoje';
  //   } else if (tempoNotificacaoAtual === 1){
  //     return `${tempoNotificacaoAtual} dia`;
  //   } else if (tempoNotificacaoAtual >= 1){
  //     return `${tempoNotificacaoAtual} dias`;
  //   }
  // }
}
