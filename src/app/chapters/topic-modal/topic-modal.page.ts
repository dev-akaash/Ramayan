import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-topic-modal',
  templateUrl: './topic-modal.page.html',
  styleUrls: ['./topic-modal.page.scss'],
})
export class TopicModalPage implements OnInit {

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }

  onClose() {
    this.modalCtrl.dismiss();
  }

}
