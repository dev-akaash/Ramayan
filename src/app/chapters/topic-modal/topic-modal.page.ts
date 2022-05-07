import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-topic-modal',
  templateUrl: './topic-modal.page.html',
  styleUrls: ['./topic-modal.page.scss'],
})
export class TopicModalPage implements OnInit {

  @Input() subtopics : any[];
  searchSarg: string;

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    // let subs = this.subtopics;
    // let slice = [];
    // this.subtopics = [];
    // subs.forEach(element => {
    //   slice.push(element.slice(11));
    // });
    // slice.forEach(el => {
    //   this.subtopics.push(el.split('सर्गः ')[0]);
    //   // console.log(el.split('सर्गः'));
    // });
    console.table(this.subtopics);
  }

  search() {
    this.subtopics
  }

  onClose() {
    this.modalCtrl.dismiss();
  }

  onClick(data: any) {
    console.log(this.subtopics.indexOf(data));
    this.modalCtrl.dismiss({data: data, index: this.subtopics.indexOf(data)});
  }

}
