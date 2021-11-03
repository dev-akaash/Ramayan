import { Component, Input, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  @Input() slok_id: number;

  constructor(
    private popoverCtrl: PopoverController
  ) { }

  ngOnInit() {
    console.log(this.slok_id);
  }

  onFav() {

  }

  dismiss() {
    this.popoverCtrl.dismiss();
  }

}
