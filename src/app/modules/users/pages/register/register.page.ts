/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
declare let gigya: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  loginParams = {
    containerID: 'registerScreen',
    startScreen: 'gigya-register-screen',
    screenSet:'LoginApp-RegistrationLogin',
  };

  constructor(
    private navCtrl: NavController,
  ) { }

  ngOnInit(): void {
    this.login();
    gigya.socialize.addEventHandlers({
      onLogin: (oAccountData) => {
        const params = {
          UID: oAccountData.UID,
          callback: (success) => {
            console.log('Login ', success);
            this.navCtrl.navigateRoot('user/login');
          }
        };
        gigya.accounts.getAccountInfo(params);
      }
    });
  }

  login = () => gigya.accounts.showScreenSet(this.loginParams);

}
