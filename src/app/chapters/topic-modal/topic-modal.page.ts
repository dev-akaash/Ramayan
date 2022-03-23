import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-topic-modal',
  templateUrl: './topic-modal.page.html',
  styleUrls: ['./topic-modal.page.scss'],
})
export class TopicModalPage implements OnInit {

  @Input() subtopics : any;

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    console.table(this.subtopics);
  }

  onClose() {
    this.modalCtrl.dismiss();
  }

  onClick(data: any) {
    console.log(this.subtopics.indexOf(data));
    this.modalCtrl.dismiss({data: data, index: this.subtopics.indexOf(data)});
  }

}
