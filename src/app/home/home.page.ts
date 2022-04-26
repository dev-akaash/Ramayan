import { SharedModalPage } from './../shared-modal/shared-modal.page';
import { NameService } from './../data.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  chapterList: any = [];

  constructor(
    private router: Router,
    private nameService: NameService,
    private modalCtrl: ModalController,
    private popoverCtrl: PopoverController
  ) {
    this.chapterList = this.nameService.chapters;
  }

  onFav() {
    this.router.navigateByUrl('/favourite');
  }

  onSearch() {
    this.router.navigateByUrl('/search');
  }

  onInformation() {
    this.router.navigateByUrl('/information');
  }

  onClick(id, name) {
    this.router.navigateByUrl('/chapters/'+JSON.stringify({id: id, name: name}));
  }

  async onModal(flag: string) {
    let body = {};
    if (flag == 'ranking') {
      body = {
        title: 'स्तर'
      }
    } else if (flag == 'question') {
      body = {
        title: 'प्रश्नोत्तरी'
      }
    }
    const modal = await this.modalCtrl.create({
      component: SharedModalPage,
      componentProps: {'data': body}
    });
    return modal.present();
  }

  async onShareModal(event: any) {
    const modal = await this.popoverCtrl.create({
      component: SharedModalPage,
      // cssClass: 'home-page-modal',
      componentProps: {'data': 'home-page'},
      event: event
    });

    return modal.present();
  }

}
