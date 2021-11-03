import { DemoService } from './demo.service';
import { PopoverPage } from './popover/popover.page';
import { TopicModalPage } from './topic-modal/topic-modal.page';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController, PopoverController } from '@ionic/angular';
import * as $ from 'jquery';

@Component({
  selector: 'app-chapters',
  templateUrl: './chapters.page.html',
  styleUrls: ['./chapters.page.scss'],
})
export class ChaptersPage implements OnInit {

  fontSize = 16;
  chapter_id: any;
  chapter_name: any;
  data: any = [];

  constructor(
    private route: ActivatedRoute,
    private modaCtrl: ModalController,
    private popoverCtrl: PopoverController,
    private demoService: DemoService
  ) { }

  ngOnInit() {
    let paramData = JSON.parse(this.route.snapshot.params['id']);
    this.chapter_id = paramData.id;
    this.chapter_name = paramData.name;
    this.data = this.demoService.getPage(this.chapter_id);
    console.log(this.data);
  }
  
  zoomIn() {
    this.fontSize += 1;
    if(this.fontSize >= 28) {
      return;
    }
    $('div').css('font-size', `${this.fontSize.toString()}px`);
  }
  
  zoomOut() {
    this.fontSize -= 1;
    if(this.fontSize <= 12) {
      return;
    }
    $('div').css('font-size', `${this.fontSize.toString()}px`);
  }

  async onModal() {
    const modal = await this.modaCtrl.create({
      component: TopicModalPage,

    });
    return modal.present();
  }

  async onPopover(event: any, id?: any) {
    const popover = await this.popoverCtrl.create({
      component: PopoverPage,
      componentProps: {'slok_id': id},
      event: event,
    });
    return popover.present();
  }

}
