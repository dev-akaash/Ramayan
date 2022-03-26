import { PopoverController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { PopoverPage } from '../chapters/popover/popover.page';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.page.html',
  styleUrls: ['./favourite.page.scss'],
})
export class FavouritePage implements OnInit {
  
  fav: any = [];

  constructor(
    private popoverCtrl: PopoverController
  ) { }

  ngOnInit() {
    this.fav = JSON.parse(window.localStorage.getItem('fav_array'));
    console.log(this.fav);
  }

  async onPopover(event: any, id?: any) {
    console.log(event.target.textContent);
    const popover = await this.popoverCtrl.create({
      component: PopoverPage, 
      componentProps: { slok: event.target.textContent, flag: false },
      event: event,
    });
    popover.present();

    const { data } = await popover.onWillDismiss();
    console.log(data);

    if (data.data == 'refresh') {
      this.ngOnInit();
    }
  }

}
