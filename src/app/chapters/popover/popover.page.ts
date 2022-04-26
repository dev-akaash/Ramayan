import { Component, Input, OnInit } from '@angular/core';
import { PopoverController, ToastController } from '@ionic/angular';
import { Clipboard } from '@awesome-cordova-plugins/clipboard/ngx';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  @Input() slok: any;
  @Input() arth: any;
  @Input() flag: boolean;
  public fav_array: any = [];

  constructor(
    private popoverCtrl: PopoverController,
    private toastCtrl: ToastController,
    private clipboard: Clipboard,
    private socialSharing: SocialSharing
  ) { }

  ngOnInit() {
    console.log(this.slok);
    if (window.localStorage.getItem('fav_array')) {
      this.fav_array = JSON.parse(window.localStorage.getItem('fav_array'));
    }
  }

  async onFav() {
    let obj = {
      shlok: this.slok,
      arth: this.arth
    };

    this.fav_array.push(obj);
    console.log(this.fav_array);

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

  onRemoveFav() {
    this.fav_array.find(element => {
      if (element == this.slok) {
        var index = this.fav_array.indexOf(element);
        this.fav_array.splice(index, 1);
        console.log(this.fav_array);
        window.localStorage.setItem('fav_array', JSON.stringify(this.fav_array));
      }
    });

    this.popoverCtrl.dismiss({data: 'refresh'});
  }

  share() {
    
    let obj = {
      shlok: this.slok,
      arth: this.arth
    };
    this.socialSharing.share(JSON.stringify(obj)).then((data: any) => {
      console.log(data);
    }).catch((err) => {
      console.log(err);
    });

    this.dismiss();
  }

  copy() {
    let obj = {
      shlok: this.slok,
      arth: this.arth
    };
    this.clipboard.copy(JSON.stringify(obj));
    this.dismiss();
  }

  dismiss() {
    this.popoverCtrl.dismiss();
  }

}
