import { Component, OnInit } from '@angular/core';
import {LoadingController, ModalController, NavController, Platform} from '@ionic/angular';
import { Observable } from 'rxjs';

import { App } from '@capacitor/app';
import { ModalNotificacoesComponent } from '@core/modal/modal-notificacoes/modal-notificacoes.component';


// import { AnalyticsService } from 'src/app/shared/services/analytics.service';
// import { ContentPage } from './content/content.page';
// import { MiddlewareService } from './../../shared/services/middleware.service';
// import { Content } from 'src/app/shared/interfaces/content';
// import {FaleConoscoComponent} from '../../shared/modals/fale-conosco/fale-conosco.component';
// import {AlterarSenhaComponent} from '../../users/alterar-senha/alterar-senha.component';
// import {ModalAcessibilidadeComponent} from '../../shared/modals/modal-acessibilidade/modal-acessibilidade.component';
// import {CapacitorStorageService} from '../../shared/services/capacitor-storage.service';
// import {DdvComponent} from '../../shared/modals/ddv/ddv.component';
// import {TdvComponent} from '../../shared/modals/tdv/tdv.component';
// import {NumerosDaSorteComponent} from '../../shared/modals/numeros-da-sorte/numeros-da-sorte.component';
// import {HistoricoComprasService} from '../../shared/services/historico-compras.service';
// import { map } from 'rxjs/internal/operators/map';
// import {ModalNotificacoesComponent} from '../../shared/modals/modal-notificacoes/modal-notificacoes.component';
// import {NavegacaoService} from "../../shared/services/navegacao.service";
// import { Plugins } from '@capacitor/core';
// import {ModalFavoritesComponent} from "../../api-products/modal-favorites/modal-favorites.component";
// const { Device } = Plugins;


@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  user: any;
  nome = new Array<any>();
  // content$: Observable<Content[]>;
  avatarUser: any;
  currentStore: any;
    lojaFavorita;
  iconesLista = 'assets/icon/menu/regulamento.svg';

  constructor(
    // private middle: MiddlewareService,
    private modalCtrl: ModalController,
    // private nav: NavController,
    // private platform: Platform,
    // private loadingCtrl: LoadingController,
    // private analytics: AnalyticsService,
    // private navegacaoService: NavegacaoService,
    // private historicoComprasService: HistoricoComprasService,
    // private capacitorStorageService: CapacitorStorageService
  ) { }

  ngOnInit() {
    // this.content$ = this.middle.onContentType().pipe(
    //   map((res) => res.filter((item) => item.type?.slug.indexOf('legal') > -1 && item.position === 'Menu'))
    // );
    //   this.obterUser();
  }

  async alterarSenha(): Promise<any> { }
  // faleConosco = async (): Promise<any> => {
    // this.analytics.logEvent('select_menu', { menu_item: 'Fale Conosco' });
    // const modal = await this.modalCtrl.create({ component: FaleConoscoComponent });
    // modal.present();
  // };
    async abrirNotificacoes(): Promise<any> {
        // this.analytics.logEvent('view_notification', {  });
        const modalNotificacoes = await this.modalCtrl.create({
            component: ModalNotificacoesComponent,
        });
        modalNotificacoes.present();
    }

//   navegateUrl(url: string, menu_item: string): void {
//     this.analytics.logEvent('select_menu', { menu_item });
//     this.nav.navigateForward(url);
//   }
//   onMdalContent = async (item: any, menu_item: string) => {
//     this.analytics.logEvent('select_menu', { menu_item });
//     const modal = await this.modalCtrl.create({
//       component: ContentPage,
//       componentProps: { item }
//     });
//     modal.present();
//   }


//    async abrirModal(modalCashback: string, menu_item: string): Promise<any> {
//       if (modalCashback === 'ddv') {
//           const modal = await this.modalCtrl.create({
//               component: DdvComponent,
//           });
//           modal.present();
//       }
//       if (modalCashback === 'tdv') {
//           const modal = await this.modalCtrl.create({
//               component: TdvComponent,
//           });
//           this.analytics.logEvent('select_menu', { menu_item });
//           modal.present();
//       }
//     }
//   async verNumerosDaSorte() {
//     this.analytics.logEvent('select_menu', { menu_item: 'Números da sorte' });
//     const ionModal = await this.modalCtrl.create({
//             component: NumerosDaSorteComponent
//         });
//     await ionModal.present();
//     }
//   async acessibilidade() {
//     this.analytics.logEvent('select_menu', { menu_item: 'Acessibilidade' });
//     const loadingAlterandoFontes = await this.loadingCtrl.create();
//     const ionModal = await this.modalCtrl.create({
//           component: ModalAcessibilidadeComponent
//       });
//     await ionModal.present();
//     ionModal.onDidDismiss().then(async resultado => {
//           if ( resultado.data !== null && typeof resultado.data !== 'undefined') {
//               loadingAlterandoFontes.present();
//               setTimeout(() => {
//                   loadingAlterandoFontes.dismiss();
//                   this.nav.navigateRoot('pages');
//               }, 1000);
//           }
//       });
//   }
//   logout = async () => {
//     await  this.capacitorStorageService.removeItem('_user');
//     await  this.capacitorStorageService.removeItem('_chuao');
//     await  this.capacitorStorageService.removeItem('tokenRefresh');
//     this.nav.navigateRoot('');
//   }
//   obterUser = async () => {
//     this.avatarUser = await this.capacitorStorageService.getObject('_avatar');
//     this.user =  await this.capacitorStorageService.getObject('_user');
//     this.capacitorStorageService.getLojaFavorita$().subscribe(lojaFavorita => {
//       if (lojaFavorita !== undefined) { this.lojaFavorita = lojaFavorita?.title1; this.currentStore = lojaFavorita; }
//       else { this.lojaFavorita = this.user.loja; }
//     });
//     this.nome = this.user.nome.split(' ');
//     // if (!this.avatarUser) {
//     //     this.avatarUser = {
//     //         name: 'default',
//     //         id: '12',
//     //         media: {
//     //             url: '/uploads/avatar_64694d79e2.png'
//     //         }
//     //     };
//     // }
//   }
//    async openFavorites() {
//       const favoritesModal = await this.modalCtrl.create({
//           component: ModalFavoritesComponent,
//           componentProps: {
//               currentStore: this.currentStore
//           }
//       });
//       favoritesModal.present();
//     }
//     comprarOnline() {
//     this.analytics.logEvent('view_delivery', { store_name: 'delivery' });
//     this.navegacaoService.abrirBrowser('http://condor-premiumlabel.sitemercado.com.br/', 'capacitor');
// }
}
