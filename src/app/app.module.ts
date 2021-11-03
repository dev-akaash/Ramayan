import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ColorPickerModule } from 'ngx-color-picker';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot({mode: 'ios'}), AppRoutingModule, ColorPickerModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy, }, SplashScreen],
  bootstrap: [AppComponent],
  exports: [ColorPickerModule]
})
export class AppModule {}
