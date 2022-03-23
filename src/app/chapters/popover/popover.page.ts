import { Component, Input, OnInit } from '@angular/core';
import { PopoverController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  @Input() slok: any;
  public fav_array: any = [];

  constructor(
    private popoverCtrl: PopoverController,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
    console.log(this.slok);
    if (window.localStorage.getItem('fav_array')) {
      this.fav_array = JSON.parse(window.localStorage.getItem('fav_array'));
    }
  }

  async onFav() {
    this.fav_array.push(this.slok);
    window.localStorage.setItem('fav_array', JSON.stringify(this.fav_array));
    const toast = this.toastCtrl.create({
      message: 'Added to favourite.',
      duration: 2000,
      position: 'bottom',
      color: 'dark'
    });
    (await toast).present();
    
    this.dismiss();
  }

  dismiss() {
    this.popoverCtrl.dismiss();
  }

}
