import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {

  constructor(public modalCtrl: ModalController, public splashScreen: SplashScreen) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    return new Promise((resolve, reject) => {
      this.splashScreen.hide();
      setTimeout(() => {
        resolve(this.modalCtrl.dismiss());
      }, 11000);
    });
  }

}
