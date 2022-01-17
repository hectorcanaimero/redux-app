import {Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

import { ScrollDetail } from '@ionic/core';
import {AlertController, IonContent, LoadingController, ModalController, NavController} from '@ionic/angular';
// import {MatDialog} from '@angular/material/dialog';
import { Plugins } from '@capacitor/core';
// import jwt_decode from 'jwt-decode';
import {Observable, pipe, Subject, timer} from 'rxjs';
import {distinctUntilChanged, map, skipWhile, switchMap, take, takeUntil} from 'rxjs/operators';
// import {Premio} from '../../shared/interfaces/premios';
// import {Banners} from '../../shared/interfaces/banners';
// import {Ofertas} from '../../shared/interfaces/ofertas';
// import {SaldoService} from '../../shared/services/saldo.service';
// import {MiddlewareService} from '../../shared/services/middleware.service';
// import {ObjectHandleService} from '../../shared/helpers/object-handle.service';
// import {GetConfigurationService} from '../../shared/services/get-configuration.service';
// import {CapacitorStorageService} from '../../shared/services/capacitor-storage.service';
// import {ModalAcessibilidadeComponent} from '../../shared/modals/modal-acessibilidade/modal-acessibilidade.component';
// import {NavegacaoService} from '../../shared/services/navegacao.service';
// import {ModalAtualizarDadosComponent} from '../../users/modal-atualizar-dados/modal-atualizar-dados.component';
// import * as moment from 'moment';
// import {PlatformHelper} from '../../shared/helpers/platform-helper';
// import {CryptoService} from '../../shared/helpers/crypto.service';
// import {AuthenticationService} from '../../shared/services/authentication.service';
// import {AlertsService} from '../../shared/modals/alerta-home/alerts.service';
// import {fadeIn} from '../../animations/animations';
// import {ApiErrorLogService} from '../../shared/services/api-error-log.service';
// import {environment} from '../../../environments/environment.prod';
// import {ApiProductsService} from '../../api-products/api-products.service';
// const { Storage } = Plugins;
// const { App, BackgroundTask } = Plugins;
// const { StatusBar } = Plugins;
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  // animations: [fadeIn]
})
export class HomePage implements OnInit, OnDestroy{
  // @ViewChild(IonContent, {static: false}) content: IonContent;
  // push: any = [];
  // user: any = [];
  // poster: any = [];
  // categorias$: any;
  // dicaDaFamilia: any;
  // showToolbar = false;
  // showHome = 'invisible';
  // showSaldo = 'invisible';
  // showContent = 'invisible';
  // products: Observable<any[]>;
  // items$: Observable<Banners[]>;
  // category: Observable<any[]>;
  // premios$: Observable<Premio[]>;
  // screenWidth: number;
  // ofertasClubeCondorParcelaveis = new Array<Ofertas>();
  // ofertasClubeCondorNaoParcelaveis = new Array<Ofertas>();
  // paladar = [];
  // clube$: Observable<Ofertas[]>;
  // eletro$: Observable<Ofertas[]>;
  // exclusiva$: Observable<Ofertas[]>;
  // ofertasDia$: Observable<Ofertas[]>;
  // lojas$: Observable<any>;
  // config: any;
  // modalOpened = false;
  // feedUsuario;
  private ngUnsubscribe = new Subject();
  constructor(
    // private router: Router,
    // private dialog: MatDialog,
    // private nav: NavController,
    // private saldoService: SaldoService,
    // private platformHelper: PlatformHelper,
    // private modalCtrl: ModalController,
    // private middlewareService: MiddlewareService,
    // private objectHandleService: ObjectHandleService,
    // private navegacaoService: NavegacaoService,
    // private cryptoService: CryptoService,
    // private loadCtrl: LoadingController,
    // private alertCtrl: AlertController,
    // private alertasService: AlertsService,
    // private apiErrorLogService: ApiErrorLogService,
    // private apiProducts: ApiProductsService,
    // private authenticationService: AuthenticationService,
    // private getConfigurationService: GetConfigurationService,
    // private capacitorStorageService: CapacitorStorageService,
  ) {}

  ngOnDestroy(): void {
      //  this.ngUnsubscribe.next();
      //  this.ngUnsubscribe.complete();
    }

  async ngOnInit() {
    // this.alertasService.alertaAvaliacao();
    // this.loadHome();
    // this.config = await this.capacitorStorageService.getObject('config');
    // this.gotTop();
    // this.dadosIOS();
    // this.obterToken();
    // this.backgroundListener();
  // }
  // loadHome() {

  //   setTimeout(() => {
  //     this.showHome = 'visible';
  //   }, 4050);
  //   setTimeout(() => {
  //     this.showContent = 'visible';
  //   }, 4000);
  //   setTimeout(() => {
  //     this.showSaldo = 'visible';
  //   }, 5000);
  // }
  // onScroll = (event: CustomEvent<ScrollDetail>) => {
  //   if (event && event.detail && event.detail.scrollTop) {
  //     const scrollTop = event.detail.scrollTop;
  //     this.showToolbar = scrollTop >= 200;
  //   }
  // }

  // getCategorias = (idLoja: number) => {
  //   this.categorias$ =  this.middlewareService.Category(idLoja);
  //   // this.middlewareService.Category(idLoja).subscribe(res => console.log(res));
  // }

  // getToken = async () => {
  //   const ret = await Storage.get({key: 'push'});
  //   this.push = JSON.parse(ret.value);
  // }

  // carregarDados = () => {
  //   this.getDicas();
  //   this.obterOpcoesAcessibilidade();
  //   this.dadosUsuario();
  //   this.items$ = this.middlewareService.onBanners();
  //   // this.items$.subscribe(result => console.log('result banner', result));
  //   this.middlewareService.setConfig();
  // }
  // doRefresh = (event: any) => timer(500).subscribe(() => {
  //   this.carregarDados();
  //   event.target.complete();
  // })

  // obterOfertasClubeCondor = async (idLoja: number) => {
  //   this.getCategorias(idLoja);

  //   const ofertas$ = this.middlewareService.getOfertas$();
  //   this.clube$ = ofertas$.pipe(map((res) => res?.filter((filter: any) => filter.preco_clube > 0)));
  //   this.eletro$ = ofertas$.pipe(map((res) => res?.filter((filter: any) => filter.departamento === 11)));
  //   this.exclusiva$ = this.middlewareService.getOfertasQuery(this.config.exclusiva, idLoja)
  //     .pipe(map((res) => res.slice(0, 20)));
  //   this.ofertasDia$ = this.middlewareService.getOfertasQuery(this.config?.carousel1.api, idLoja)
  //     .pipe(map((res) => res.slice(0, 20)));
  //   const user = await this.capacitorStorageService.getObject('_user');
  //   const ofertasDia$ = this.middlewareService.getOfertasQuery(this.config?.carousel1.api, idLoja)
  //       .pipe(switchMap(ofertas => { return this.apiProducts.getFavorites(user.cpfcnpj, idLoja)
  //           .pipe(map( favorites => {
  //             const filteredFavorites = [];
  //             const slidesOfertas = ofertas.slice(0, 20);
  //             slidesOfertas.forEach(slideOferta => {
  //               slideOferta?.produtos.cod_produto === favorites.codProduto ? slideOferta.favorite = 'true'
  //               : slideOferta.favorite = false;
  //               filteredFavorites.push(slideOferta);
  //             });
  //             return filteredFavorites;
  //           }));
  //       }));
  // }

  // getDicas = () => {
  //   this.getConfigurationService.onDicasDaFamilia().pipe(take(1)).subscribe(dicasDoDia => {
  //     const dicaSorteada = this.objectHandleService
  //         .retornarNumerosAleatorios(0,
  //             dicasDoDia.length - 1,
  //             1, false)[0];
  //     this.dicaDaFamilia = dicasDoDia[dicaSorteada];
  //   });
  // }

  // showNotifications = () => this.router.navigateByUrl('/login');

  // departamentoSelecionado = (departamento: any) => {
  //   this.nav.navigateForward(`pages/home/departamento/${departamento.codigo}`);
  // }
  // dadosUsuario = async () => {
  //   await this.capacitorStorageService.getObject('_user').then( async (res) => {
  //     this.user = res;
  //     this.middlewareService.feed(this.user.id).pipe(take(1)).subscribe(feeds => {
  //       this.feedUsuario = feeds;
  //       console.log('this.feedUsuario', this.feedUsuario);
  //     }, err => {
  //           console.log('erro feed', err);
  //           this.obterToken(true);
  //     }, () => {
  //           this.middlewareService.onBanners().pipe(take(1)).subscribe(feedsCondor => {
  //             const feedsCondorBanner = feedsCondor?.filter(feed => feed?.position?.name === 'feeds');
  //             this.feedUsuario = this.feedUsuario.concat(feedsCondorBanner);
  //           });
  //         });
  //     this.premios$ = this.saldoService.Campanha(res.id, res.token);
  //     this._lojaFavorita();
  //     this._saldo(res.token);
  //   }).catch(() => {
  //     this.obterOfertasClubeCondor(6);
  //     this.category = this.middlewareService.Category(6);
  //     this.products = this.middlewareService.Ofertas(6, 10);
  //   });
  //   this.saldoService.LogosAll().subscribe(res => this.saldoService.setLogos$(res));
  // }
  // // getNumeroSorte = (id: number, token: string) => this.saldoService.Campanha(id, token).subscribe(data =>  this.premios = data);

  // _lojaFavorita = async () => {
  //   this.lojas$ = this.capacitorStorageService.getLojaFavorita$();
  //   this.lojas$ .pipe(skipWhile(res => res === null), distinctUntilChanged((prev, curr) =>
  //       prev[0] !== curr[0] && prev[1] !== curr[1]
  //   )).subscribe(lojaFavoritaAtual => {
  //         if (lojaFavoritaAtual !== null ) {
  //           this.obterOfertasClubeCondor(lojaFavoritaAtual?.cod_loja);
  //           this.capacitorStorageService.setObject('lojaFavorita', lojaFavoritaAtual);
  //         }
  //       });
  // }

  // _saldo = (token: string) => {
  //   this.saldoService.Global(token).pipe(take(1)).subscribe(data => {
  //     // console.log('data saldo', data);
  //     this.saldoService.setTroco$(data.troco);
  //     this.saldoService.setSaldos$(data.saldo);
  //     this.saldoService.setGlobal$(data.global);
  //     // console.log(data);
  //   });
  // }

  // obterOpcoesAcessibilidade = async () => {
  //   const acessibilidade = await this.capacitorStorageService.getItem('acessibilidade');
  //   console.log('acessibilidade', acessibilidade);
  //   if ( acessibilidade === null ) {
  //     this.modalOpened = true;
  //     const ionModal = await this.modalCtrl.create({ component: ModalAcessibilidadeComponent });
  //     await ionModal.present();
  //     ionModal.onDidDismiss().then(() => {
  //       this.modalOpened = false;
  //       this. verificarAlertas();
  //     });
  //   } else {
  //     this. verificarAlertas();
  //     this.capacitorStorageService.setTamanhoFonte$(acessibilidade);
  //   }
  // }
  // gotTop() {
  //   this.navegacaoService.getGotTop$().subscribe(res => {
  //     if (res) {
  //       setTimeout(() => {
  //         this.content.scrollToTop(1);
  //       }, 10);
  //     }
  //   });
  // }
  // async dadosIOS() {
  //   const user = await this.capacitorStorageService.getObject('_user');
  //   const dataLogin = await this.capacitorStorageService.getItem('_dataLogin');
  //   if (dataLogin) {
  //     const dataAtual = new Date(dataLogin);
  //     const tempoLogin = moment(dataAtual).diff(moment(), 'months');
  //     if (tempoLogin >= 1) {
  //       this.capacitorStorageService.setItem('_dataLogin', moment().format('YYYY-MM-DD hh:mm:ss'));
  //       if (user) {
  //         if (user.nascimento === '01/01/1915') {
  //           const modal = await this.modalCtrl
  //               .create({component: ModalAtualizarDadosComponent,
  //                 componentProps: {grupoDados: 'dataNascimento', user}});
  //           modal.present();
  //         }
  //       }
  //     }
  //   } else {
  //     this.capacitorStorageService.setItem('_dataLogin', moment().format('YYYY-MM-DD'));
  //   }
  // }
  // async obterToken(refresh?: boolean, naoCarregarDados?: boolean): Promise<any> {
  //   const user = await this.capacitorStorageService.getObject('_user');
  //   const dataToken = await this.capacitorStorageService.getItem('tokenRefresh');
  //   const decodeToken = jwt_decode(user.token) as any;
  //   const timeToken = moment.unix(decodeToken.exp).diff(moment(), 'minutes');
  //   if (!dataToken) {
  //     this.logout();
  //   } else {
  //     const tempoToken = moment().diff(moment(dataToken), 'minutes');
  //     if (tempoToken > 10 || refresh || timeToken <= 0) {

  //       this.login();
  //     } else {
  //       if (!naoCarregarDados ) {
  //          console.log('carregou dados');
  //          this.carregarDados();
  //       }
  //     }
  //   }
  // }
  // async login() {
  //   // console.log('entrou login dados');
  //   const user = await this.capacitorStorageService.getObject('_user');
  //   let senha = await this.capacitorStorageService.getItem('password');
  //   // console.log('antigo token', user.token);
  //   senha = this.cryptoService.decryptData(senha);
  //   if (this.platformHelper.retornarPlatformMobile()) {
  //     this.authenticationService.loginPlugin({
  //       login: user.cpfcnpj,
  //       senha
  //     }).then(async result => {
  //           const res = JSON.parse(result.data);
  //           if (res.id) {
  //             const fireToken = await this.capacitorStorageService.getItem('_fireToken');
  //             this.capacitorStorageService.setItem('password', this.cryptoService.encryptData(senha));
  //             this.capacitorStorageService.setObject('_user', res);
  //             this.capacitorStorageService.setItem('_chuao', res.token);
  //             this.capacitorStorageService.setItem('tokenRefresh', moment().format('YYYY-MM-DD HH:mm:ss'));
  //             this.carregarDados();
  //             if (!fireToken) {
  //               this.authenticationService.loginFirebase({cpfcnpj: user.cpfcnpj, email: user.email});
  //             }
  //           } else {
  //             if (res.messageError) {
  //               console.log('err plugin 4', res.messageError);
  //               this.apiErrorLogService.httPosts(res, {
  //                 body: {login: user.cpfcnpj},
  //                 header: environment.headersGS
  //               });
  //             } else {
  //               if (res.message) {
  //                 this.apiErrorLogService.httPosts(res, {
  //                   body: {login: user.cpfcnpj},
  //                   header: environment.headersGS
  //                 });
  //                 console.log('err plugin 3', res.message);
  //               }
  //             }
  //           }
  //         },
  //         err => {
  //           this.apiErrorLogService.httPosts(err, {
  //             body: {login: user.cpfcnpj},
  //             header: environment.headersGS
  //           });
  //           console.log('err plugin 2', err);
  //         }
  //     ).catch(async err => {
  //       console.log('err plugin', err);
  //       const res = JSON.parse(err.error);
  //       console.log('Erro no login', res);
  //       console.log('Erro no login', moment().utcOffset('-3'));
  //       if (res.messageError) {
  //         const alert = await this.alertCtrl.create({
  //           message: res.messageError.message,
  //           buttons: [
  //             {
  //               text: 'Ok',
  //               role: 'cancel'
  //             }
  //           ]
  //         });
  //         alert.present();
  //       } else {
  //         if (res.message) {
  //           const alert = await this.alertCtrl.create({
  //             message: res.message,
  //             buttons: [
  //               {
  //                 text: 'Ok',
  //                 role: 'cancel'
  //               }
  //             ]
  //           });
  //           alert.present();
  //         }
  //       }
  //     });
  //   } else {
  //     this.authenticationService.Login({
  //       login: user.cpfcnpj,
  //       senha
  //     }).subscribe(
  //         async res => {
  //           if (res.id) {
  //             const fireToken = await this.capacitorStorageService.getItem('_fireToken');
  //             this.capacitorStorageService.setItem('password', this.cryptoService.encryptData(senha));
  //             this.capacitorStorageService.setObject('_user', res);
  //             this.capacitorStorageService.setItem('_chuao', res.token);
  //             // console.log('novo token', res.token);
  //             this.carregarDados();
  //             this.saldo(res.token);
  //             this.capacitorStorageService.setItem('tokenRefresh', moment().format('YYYY-MM-DD HH:mm:ss'));
  //             if (!fireToken) {
  //               this.authenticationService.loginFirebase({cpfcnpj: user.cpfcnpj, email: user.email});
  //             }
  //           } else {
  //             if (res.messageError) {
  //               this.apiErrorLogService.httPosts(res, {
  //                 body: {login: user.cpfcnpj},
  //                 header: environment.headersGS
  //               });
  //             } else {
  //               if (res.message) {
  //                 this.apiErrorLogService.httPosts(res, {
  //                   body: {login: user.cpfcnpj},
  //                   header: environment.headersGS
  //                 });
  //               }
  //             }
  //           }
  //         },
  //         err => {
  //           console.log('erro token', err);
  //           this.apiErrorLogService.httPosts(err, {
  //             body: {login: user.cpfcnpj},
  //             header: environment.headersGS
  //           });
  //         }
  //     );
  //   }
  // }
  // async logout() {
  //   await  this.capacitorStorageService.removeItem('_user');
  //   await  this.capacitorStorageService.removeItem('_chuao');
  //   await  this.capacitorStorageService.removeItem('lojaFavorita');
  //   await  this.capacitorStorageService.removeItem('tokenRefresh');
  //   this.nav.navigateRoot('');
  // }
  // saldo = (token: string) => {
  //   this.saldoService.Global(token).pipe(take(1)).subscribe(data => {
  //     this.saldoService.setTroco$(data.troco);
  //     this.saldoService.setSaldos$(data.saldo);
  //     this.saldoService.setGlobal$(data.global);
  //     // console.log(data);
  //   });
  // }
  // backgroundListener() {
  //   App.addListener('appStateChange', async state => {
  //     // console.log('state', state);
  //     if (state.isActive) {
  //       // const loading = await this.loadCtrl.create({
  //       //   message: 'Carregando'
  //       // });
  //       // loading.present();
  //       // this.dadosUsuario();
  //       // this.items$ = this.middlewareService.onBanners();
  //       // this.items$.subscribe(result => console.log('result banner', result));
  //       // setTimeout(() => {
  //       //   loading.dismiss();
  //       // }, 1500);
  //       this.obterToken(false, true);
  //     }
  //   });
  // }
  // verificarAlertas() {
  //   this.alertasService.onAlertas().pipe(take(1)).subscribe(async res => {
  //     this.alertasService.salvarAlertaExibido(res[0]);
  //   });
  // }
  }
}
