import { Component } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { PushService } from '@core/services/push.service';
import { StorageService } from '@core/services/storage.service';
import { Platform } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { loadUser } from '@store/actions';
import { AppState } from '@store/app.state';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private store: Store<AppState>,
    private storage: StorageService,
    private pushService: PushService,
  ) {
    this.initializeApp();
  }


  initializeApp = () => {
    this.platform.ready().then(async () => {
      // this.pushService.initPush();
      await this.listenerApp();
      this.activateBackButton();
    });
  };

  listenerApp = async () => {
    const user = await this.storage.getStorage('oUser');
    if(user) {
      this.store.dispatch(loadUser({ user }));
    }
  };

  activateBackButton() {
    this.platform.backButton.subscribeWithPriority(10, () => {
      console.log('Handler was called!');
      //   this.modalCtrl.getTop().then(modalState => {
      //     if (!modalState) {
      //       const routes = this.router.url.split('/');
      //       if (!routes.includes('departamento') && !routes.includes('campanha')) {
      //         if (routes.includes('home')) {
      //           this.appMinimize.minimize();
      //         } else {
      //           this.nav.navigateRoot('/pages/home');
      //         }
      //       } else {
      //         this.nav.pop();
      //       }
      //     }
      //   });
      // });
    });
  }
}
