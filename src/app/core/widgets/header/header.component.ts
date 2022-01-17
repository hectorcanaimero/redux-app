import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {AlertController, LoadingController, ModalController, NavController} from '@ionic/angular';
import {Location} from '@angular/common';
import {skipWhile, take, takeUntil} from 'rxjs/operators';
// import {PushNotifications} from '../../shared/interfaces/pushNotifications';
// import {MiddlewareService} from '../../shared/services/middleware.service';
// import {AnalyticsService} from '../../shared/services/analytics.service';
// import {CapacitorStorageService} from '../../shared/services/capacitor-storage.service';
// import {ModalNotificacoesComponent} from '../../shared/modals/modal-notificacoes/modal-notificacoes.component';
// import {EscolherLojaComponent} from '../../shared/modals/escolher-loja/escolher-loja.component';
// import {ApiProductsService} from '../api-products.service';
// import {ModalProductDetailComponent} from '../modal-product-detail/modal-product-detail.component';
// import {BarcodeService} from '../barcode.service';
// import {ModalFavoritesComponent} from '../modal-favorites/modal-favorites.component';
// import {Plugins, StatusBarStyle} from '@capacitor/core';
// const { StatusBar } = Plugins;
@Component({
  selector: 'app-header-widget',
  templateUrl: './header.widget.html',
  styleUrls: ['./header.widget.scss'],
})
export class HeaderComponent implements OnInit {
  // @Input() url: string;
  // @Input() botaoVoltar: string;
  // @Input() exibirLojas = true;
  // exibirNotificacoes = 'notifications';
  // lojas$: Observable<any>;
  // lojaFavorita$: Observable<any>;
  // private ngUnsubscribe = new Subject();
  // notificacoes: PushNotifications = {} as PushNotifications;
  // notifications = [];
  // currentStore;
  constructor(
    // private middlewareService: MiddlewareService,
    //           private modalCtrl: ModalController,
    //           private alertCtrl: AlertController,
    //           private nav: NavController,
    //           private analytics: AnalyticsService,
    //           private location: Location,
    //           private barcodeService: BarcodeService,
    //           private loadingCtrl: LoadingController,
    //           private apiProducts: ApiProductsService,
    //           private capacitorStorageService: CapacitorStorageService
  ) { }
  ngOnInit() {
    // this.carregarDados();
    // this.carregarNotificacoes();
    // StatusBar.setBackgroundColor({color: 'ffffff'});
    // StatusBar.setStyle({ style: StatusBarStyle.Light });
  }

  scanProduct = () => {};
  showNotifications = () => {};
  selectStoreFavorite = () => {};


//   async getFavorites() {
//   const modalFavorite = await this.modalCtrl.create({
//     component: ModalFavoritesComponent,
//     componentProps: {
//       currentStore: this.currentStore
//     }
//   });
//   modalFavorite.present();
//   }
//   async carregarDados() {

//     this.lojas$ = this.middlewareService.onLojas();
//     this.lojaFavorita$ = this.apiProducts.getLojaFavorita$();
//     this.apiProducts.getLojaFavorita$()
//         .pipe(skipWhile(res => res === null), takeUntil(this.ngUnsubscribe))
//         .subscribe(lojaFavorita => {
//           this.currentStore = lojaFavorita;
//           console.log('CURRENTsTORE', this.currentStore );
//           this.capacitorStorageService.getNotifications$().subscribe(notificacoesSalvas =>
//           this.notificacoes = notificacoesSalvas);
//           if (typeof lojaFavorita !== 'undefined' && lojaFavorita !== null) {
//         this.ngOnDestroy();
//         this.apiProducts.setLojaFavorita$(lojaFavorita);
//         this.middlewareService.OnOfertas(lojaFavorita.cod_loja);
//       }

//     });
//   }

//   async escolherLoja() {
//     const modal = await this.modalCtrl.create({ component: EscolherLojaComponent });
//     modal.present();
//   }
//   async abrirNotificacoes(): Promise<any> {
//     this.analytics.logEvent('view_notification', {  });
//     const modalNotificacoes = await this.modalCtrl.create({
//       component: ModalNotificacoesComponent,
//       componentProps: { notificacoes: this.notificacoes }
//     });
//     modalNotificacoes.present();
//   }
//   voltar(url?: string) {
//     if (url) {  this.nav.navigateRoot(url); }
//     else {
//       this.location.back();
//     }
//   }
//  async scannearProduto() {
//    let scannedText =  await this.barcodeService.startScan();
//    console.log('scannedText', scannedText);
//    if (scannedText?.hasPermission === true) {
//       scannedText =  await this.barcodeService.startScan();
//       this.scannedText(scannedText);
//    } else {
//      this.scannedText(scannedText);
//    }
//   }
//   async carregarNotificacoes() {
//     const user = await this.capacitorStorageService.getObject('_user');
//     this.middlewareService.historicoPush(user.token).pipe(take(1)).subscribe(res => {
//       this.notifications = res;
//       // console.log('res', res);
//       this.notifications.length > 0 ? this.exibirNotificacoes = 'notifications' : this.exibirNotificacoes = 'notifications-outline';
//     }, error => {
//       this.exibirNotificacoes = 'notifications-outline';
//     });
//   }

//   ngOnDestroy(): void {
//     this.ngUnsubscribe.next();
//     this.ngUnsubscribe.complete();
//   }
//   async scannedText(scannedText: string) {
//     const loading1 = await this.loadingCtrl.create({
//       cssClass: 'scanner-alert'
//     });
//     let lojaFavoritaAtual;
//     loading1.present();
//     this.apiProducts.getLojaFavorita$().pipe(take(1)).subscribe(loja => {
//       lojaFavoritaAtual = loja;
//     }, error => {
//       loading1.dismiss();
//     }, () => {
//       console.log('scannear text', scannedText);
//       if ( scannedText.length > 0) {
//         this.apiProducts.productsEAN(lojaFavoritaAtual.cod_loja, scannedText).pipe(take(1)).subscribe(async dadosProduto => {
//           const modal = await this.modalCtrl.create({
//             component: ModalProductDetailComponent,
//             componentProps: {
//               product: dadosProduto
//             }
//           });
//           modal.present();
//           loading1.dismiss();
//         }, async error => {
//           console.log('error', error);
//           const alert = await this.alertCtrl.create({
//             message: error.error.message ? error.error.message : error.error,
//             buttons: [
//               {
//                 text: 'OK'
//               }
//             ]
//           });
//           alert.present();
//           loading1.dismiss();
//         });
//       } else {
//         loading1.dismiss();
//       }
//     });
//   }
}
