import {AfterViewInit, Component, NgZone, OnInit} from '@angular/core';
import {InAppBrowser, InAppBrowserOptions} from '@awesome-cordova-plugins/in-app-browser/ngx';
import { Network } from '@capacitor/network';


// import {
//     Plugins, Capacitor, StatusBarBackgroundColorOptions, StatusBarStyle, NetworkStatus,
// } from '@capacitor/core';
// import {CapacitorStorageService} from '../shared/services/capacitor-storage.service';
// import {ModalController, NavController} from '@ionic/angular';
// const { StatusBar } = Plugins;
// const { Browser } = Plugins;
// import {AuthenticationService} from '../shared/services/authentication.service';
// import {CryptoService} from '../shared/helpers/crypto.service';
// import {FcmService} from '../shared/services/fcm.service';
// import {UserGS} from '../shared/interfaces/user-login';
// import {ModalAtualizarDadosComponent} from '../users/modal-atualizar-dados/modal-atualizar-dados.component';
// import {HistoricoComprasService} from '../shared/services/historico-compras.service';
// import {NavegacaoService} from '../shared/services/navegacao.service';
// import { AnalyticsService } from 'src/app/shared/services/analytics.service';
// import {GetConfigurationService} from '../shared/services/get-configuration.service';
// import {PlatformHelper} from '../shared/helpers/platform-helper';
// import {SaldoService} from '../shared/services/saldo.service';
// import {SearchPage} from "../api-products/search/search.page";

@Component({
  selector: 'app-pages',
  templateUrl: './pages.page.html',
  styleUrls: ['./pages.page.scss'],
})
export class PagesPage implements OnInit {
  online$: any;
  network = { connected: true };
  options: InAppBrowserOptions = {
    location : 'yes', hidden : 'no', zoom : 'yes',
    hideurlbar: 'yes', toolbarcolor: '#ffffff',
  };
  constructor(
    private ngZone: NgZone,
    private iab: InAppBrowser,
    // private nav: NavController,
    // private modalCtrl: ModalController,
    // private analytics: AnalyticsService,
    // private cryptoService: CryptoService,
    // private saldoService: SaldoService,
    // private platformHelper: PlatformHelper,
    // private getConfigurationService: GetConfigurationService,
    // private navegacaoService: NavegacaoService,
    // private authenticationService: AuthenticationService,
    // private capacitorStorageService: CapacitorStorageService,
    // private historicoComprasService: HistoricoComprasService,
  ) {
  }
  ngOnInit() {
    this.initialize();
  }

  initialize = () => {
    this.getConnection();
    // this.historicoComprasService.obterHistoricoUsuario();
    // this.obterNotificacoes();
  };

//   obterNotificacoes(): void {
//     this.capacitorStorageService.getObject('_notificacoes')
//         .then(notificacoes => this.capacitorStorageService.setNotifications$(notificacoes));
//   }
  openSiteMercado(): void {
    // this.analytics.logEvent('view_delivery', { store_name: 'delivery' });
    // this.navegacaoService.abrirBrowser('http://condor-premiumlabel.sitemercado.com.br/', 'capacitor');
  }

//   async  grupoFamiliar(): Promise<any> {
//     const user = await this.capacitorStorageService.getObject('_user');
//     // console.log(user);
//     const modal = await this.modalCtrl.create({
//           component: ModalAtualizarDadosComponent,
//           componentProps: {grupoDados: 'dadosPessoais', user, naoFechar: true},
//           backdropDismiss: false
//       });
//     modal.present();
//     // if (user.grupofamiliar === null || typeof user.grupofamiliar === 'undefined') {
//     //   const modal = await this.modalCtrl.create({
//     //     component: ModalAtualizarDadosComponent,
//     //     componentProps: {grupoDados: 'dadosPessoais', user, naoFechar: true},
//     //     backdropDismiss: false
//     //   });
//     //   modal.present();
//     // }
//   }
// goTop(color: string) {
//     this.navegacaoService.setGotTop$('home-go-top');
//     this.changeColor(color);
// }
//   changeColor(color: string) {
//     if (Capacitor.isPluginAvailable('StatusBar')) {
//       StatusBar.setBackgroundColor( {color} );
//       StatusBar.setStyle({ style: color === '#ffffff' ? StatusBarStyle.Light : StatusBarStyle.Dark});
//       StatusBar.show();
//     }
//   }
//   async onPromotion(color: string) {
//     this.analytics.logEvent('view_promotion', { store_name: 'ofertas' });
//     this.changeColor(color);
//     const modalSearch = await this.modalCtrl.create({
//         component: SearchPage
//     });
//     modalSearch.present();
//   }
//   ngAfterViewInit(): void {
//     setTimeout(() => {
//       this.getConfigurationService.getConfig();
//     }, 8000);
//   }
  getConnection = async () => {
    this.network = await Network.getStatus();
    const network =  Network.addListener('networkStatusChange', (status) => {
      this.ngZone.run(() => {
        this.network = status;
        if (status.connected === true) { this.ngOnInit(); }
      });
    });
  };
}
