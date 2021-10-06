import { SplashPage } from './splash/splash.page';
import { NameService } from './data.service';
import { Component, OnInit } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  chapterList: any = [];

  constructor(
    private nameService: NameService,
    private splashScreen: SplashScreen,
    private platform: Platform,
    private modalCtrl: ModalController
  ) {
    this.chapterList = this.nameService.chapters;
  }

  async ngOnInit() {
    await this.dummy();
    // this.platform.ready().then(async () => {
    //   let splash = await this.modalCtrl.create({
    //     component: SplashPage
    //   });
    //   splash.present();
    // });
  }

  dummy() {
    return new Promise(async (resolve, reject) => {
      this.platform.ready().then(async () => {
        let splash = await this.modalCtrl.create({
          component: SplashPage
        });
        resolve(splash.present());
      });
    });
  }
}
