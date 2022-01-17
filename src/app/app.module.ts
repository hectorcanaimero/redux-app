import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';

import { appRoute } from 'src/app/app.routes';
import { CoreModule } from '@core/core.module';
import { CoreCordovaModule } from '@core/core-cordova.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { ROOT_REDUCERS } from '@store/app.state';
import { EffectsArray } from '@store/effects';


const runtimeChecks = { strictStateImmutability: false, strictActionImmutability: false };

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    appRoute,
    CoreModule,
    BrowserModule,
    CoreCordovaModule,
    IonicModule.forRoot(),
    StoreModule.forRoot(ROOT_REDUCERS, { runtimeChecks }),
    StoreDevtoolsModule.instrument({ name: 'TEST', maxAge: 25 }),
    EffectsModule.forRoot(EffectsArray),
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
