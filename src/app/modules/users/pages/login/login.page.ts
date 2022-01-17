import { NavController } from '@ionic/angular';
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@store/app.state';
import { loadUser } from '@store/actions/user.actions';
import { StorageService } from '@core/services/storage.service';

declare let gigya: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginParams = {
    containerID: 'loginScreen',
    startScreen: 'gigya-login-screen',
    screenSet:'LoginApp-RegistrationLogin',
  };

  constructor(
    private store: Store<AppState>,
    private storage: StorageService,
    private navCtrl: NavController,
  ) { }

  ngOnInit(): void {
    this.login();
    gigya.socialize.addEventHandlers({
      onLogin: (oAccountData) => {
        const params = {
          UID: oAccountData.UID,
          callback: async (success) => {
            console.log('Login ', success);
            await this.loginSuccess(success);
          }
        };
        gigya.accounts.getAccountInfo(params);
      }
    });
  }

  login = () => gigya.accounts.showScreenSet(this.loginParams);

  onRegister = () => this.navCtrl.navigateForward('user/register');

  private loginSuccess = async (user: any) => {
    await this.storage.setStorage('oUser', user);
    this.store.dispatch(loadUser({ user }));
    this.navCtrl.navigateRoot('pages/home');
  };
}
