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

  count: number;
  fontSize: any = 16;
  chapter_id: any;
  chapter_name: any;
  data: any = [];
  public ayodhyakhandData: any = [];
  public aryanKandData: any[];
  public check_ayodhyakhandData = false;
  public sunderkandData: any[];
  public check_sunderkand = false;
  public check_aryankand = false;
  public check_utarkand = false;
  public check_KisKindhaKand = false;
  public KisKindhaKandData: any[];
  public check_balkand = false;
  public balkandData: any = [];
  public utarkandData: any[];
  public check_PathVidhi: boolean = false;
  public PathVidhiData: any[];
  public PathVidhipathvidhi_vinyogData: any;
  public subTopics: any = [];
  temp_arr: any[] = [];
  sub: any;
  public check_yudhkand: boolean = false;
  public yudhkandData: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private modaCtrl: ModalController,
    private popoverCtrl: PopoverController,
    private demoService: DemoService,
  ) {
    // this.demoService.fontSize$.next(16)
    // this.demoService.fontSize$.subscribe((res:any)=>{
    //   this.fontSize =res
    //   alert(res)
    // })
  }

  ngOnInit() {
    this.temp_arr = [];
    if (window.localStorage.getItem('fontSize')) {
      this.fontSize = window.localStorage.getItem('fontSize');
      $('div').css('font-size', `${this.fontSize.toString()}px`);
      // alert(this.fontSize);
    }

    let paramData = JSON.parse(this.route.snapshot.params['id']);
    this.chapter_id = paramData.id;

    this.chapter_name = paramData.name;
    this.data = this.demoService.getPage(this.chapter_id);
    console.log(this.data);
    if (this.chapter_id == 1) {
      this.check_PathVidhi = true;
      this.PathVidhiData = this.demoService.PathVidhiModel.pathvidhi;
      this.PathVidhipathvidhi_vinyogData =
        this.demoService.PathVidhiModel.pathvidhi_vinyog;
    }
    if (this.chapter_id == 4) {
      this.count = 0;
      this.subTopics = [];
      this.check_balkand = true;
      this.balkandData = this.demoService.balkandModel.balkand;
      const temp: any = this.balkandData[this.count];
      this.temp_arr.push(temp);
      
      this.balkandData.forEach((item: any) => {
        this.subTopics.push(item.Adhyay);
      });
      
      this.sub = this.subTopics[0];
      console.log(this.balkandData);
    }
    if (this.chapter_id == 5) {
      this.count = 0;
      this.subTopics = [];
      this.ayodhyakhandData = this.demoService.ayodhyakandsModel.ayodhyakands;
      this.check_ayodhyakhandData = true;
      const temp: any = this.ayodhyakhandData[this.count];
      this.temp_arr.push(temp);

      this.ayodhyakhandData.forEach((item: any) => {
        this.subTopics.push(item.Adhyay);
      });

      this.sub = this.subTopics[0];
    }
    if (this.chapter_id == 6) {
      this.count = 0;
      this.subTopics = [];
      this.check_aryankand = true;
      this.aryanKandData = this.demoService.AryanKandModel.arryanKhand;
      const temp: any = this.aryanKandData[this.count];
      this.temp_arr.push(temp);

      this.aryanKandData.forEach((item: any) => {
        this.subTopics.push(item.Adhyay);
      })

      this.sub = this.subTopics[0];
      console.log(this.aryanKandData);
    }
    if (this.chapter_id == 7) {
      this.count = 0;
      this.subTopics = [];
      this.check_KisKindhaKand = true;
      this.KisKindhaKandData = this.demoService.KisKindhaKandModel.kisKindhaKand;
      const temp: any = this.KisKindhaKandData[this.count];
      this.temp_arr.push(temp);
      
      this.KisKindhaKandData.forEach((item: any) => {
        this.subTopics.push(item.Adhyay);
      });
      
      this.sub = this.subTopics[0];
      console.log(this.KisKindhaKandData);
    }
    if (this.chapter_id == 8) {
      this.count = 0;
      this.subTopics = [];
      this.check_sunderkand = true;
      this.sunderkandData = this.demoService.sunderkhandModel.sundarkand;
      const temp: any = this.sunderkandData[this.count];
      this.temp_arr.push(temp);

      this.sunderkandData.forEach((item: any) => {
        this.subTopics.push(item.Adhyay);
      });

      this.sub = this.subTopics[0];
      console.log(this.sunderkandData);
    }
    if (this.chapter_id == 10) {
      this.count = 0;
      this.subTopics = [];
      this.check_utarkand = true;
      this.utarkandData = this.demoService.utarkandModle.utarkand;
      const temp: any = this.utarkandData[this.count];
      this.temp_arr.push(temp);

      this.utarkandData.forEach((item: any) => {
        this.subTopics.push(item.Adhyay);
      });

      this.sub = this.subTopics[0];
      console.log(this.utarkandData);
    }

    if (this.chapter_id == 9) {
      this.count = 0;
      this.subTopics = [];
      this.check_yudhkand = true;
      this.yudhkandData = this.demoService.yudhkandModle.yudhkand;
      const temp: any = this.yudhkandData[this.count];
      this.temp_arr.push(temp);

      this.yudhkandData.forEach((item: any) => {
        this.subTopics.push(item.Adhyay);
      });

      this.sub = this.subTopics[0];
      console.log(this.yudhkandData);
    }
  }

  zoomIn() {
    console.log(this.fontSize);
    if (this.fontSize <= 28) {
      this.fontSize += 1;
      $('div').css('font-size', `${this.fontSize.toString()}px`);
      // window.localStorage.setItem('fontSize', this.fontSize);
    } else {
      return;
    }
  }

  zoomOut() {
    console.log(this.fontSize);
    if (this.fontSize >= 12) {
      this.fontSize -= 1;
      $('div').css('font-size', `${this.fontSize.toString()}px`);
      // window.localStorage.setItem('fontSize', this.fontSize);
    } else {
      return;
    }
  }

  async onModal() {
    const modal = await this.modaCtrl.create({
      component: TopicModalPage,
      componentProps: { subtopics: this.subTopics, value: this.subTopics },
    });
    modal.present();

    const { data } = await modal.onWillDismiss();
    console.log(data);

    if (data != undefined) {
      this.sub = data.data;
      this.temp_arr = [];
      if (this.check_balkand) {
        const temp: any = this.balkandData[data.index];
        this.temp_arr.push(temp);
      }
      if (this.check_ayodhyakhandData) {
        const temp: any = this.ayodhyakhandData[data.index];
        this.temp_arr.push(temp);
      }
      if (this.check_aryankand) {
        const temp: any = this.aryanKandData[data.index];
        this.temp_arr.push(temp);
      }
      if (this.check_KisKindhaKand) {
        const temp: any = this.KisKindhaKandData[data.index];
        this.temp_arr.push(temp);
      }
      if (this.check_sunderkand) {
        const temp: any = this.sunderkandData[data.index];
        this.temp_arr.push(temp);
      }
      if (this.check_utarkand) {
        const temp: any = this.utarkandData[data.index];
        this.temp_arr.push(temp);
      }
    }
  }

  async onPopover(event: any, id?: any) {
    console.log(event.target.textContent);
    const popover = await this.popoverCtrl.create({
      component: PopoverPage,
      componentProps: { slok: event.target.textContent, flag: true },
      event: event,
    });
    popover.present();
  }

  nextSarg() {
    this.count++;
    if (this.check_balkand) {
      if (this.count >= this.balkandData.length) return;
      const tempdata: any = this.balkandData[this.count];
      this.temp_arr = [];
      this.temp_arr.push(tempdata);
      console.log(this.balkandData[this.count]);
    } else if (this.check_ayodhyakhandData) {
      if (this.count >= this.ayodhyakhandData.length) return;
      const tempdata: any = this.ayodhyakhandData[this.count];
      this.temp_arr = [];
      this.temp_arr.push(tempdata);
      console.log(this.ayodhyakhandData[this.count]);
    } else if (this.check_aryankand) {
      if (this.count >= this.aryanKandData.length) return;
      const tempdata: any = this.aryanKandData[this.count];
      this.temp_arr = [];
      this.temp_arr.push(tempdata);
      console.log(this.aryanKandData[this.count]);
    } else if (this.check_KisKindhaKand) {
      if (this.count >= this.KisKindhaKandData.length) return;
      const tempdata: any = this.KisKindhaKandData[this.count];
      this.temp_arr = [];
      this.temp_arr.push(tempdata);
      console.log(this.KisKindhaKandData[this.count]);
    } else if (this.check_sunderkand) {
      if (this.count >= this.sunderkandData.length) return;
      const tempdata: any = this.sunderkandData[this.count];
      this.temp_arr = [];
      this.temp_arr.push(tempdata);
      console.log(this.sunderkandData[this.count]);
    } else if (this.check_utarkand) {
      if (this.count >= this.utarkandData.length) return;
      const tempdata: any = this.utarkandData[this.count];
      this.temp_arr = [];
      this.temp_arr.push(tempdata);
      console.log(this.utarkandData[this.count]);
    } else {
      //
    }
  }

  previousSarg() {
    this.count--;
    if (this.check_balkand) {
      if (this.count < 0) return;
      const tempdata: any = this.balkandData[this.count];
      this.temp_arr = [];
      this.temp_arr.push(tempdata);
      console.log(this.balkandData[this.count]);
    } else if (this.check_ayodhyakhandData) {
      if (this.count < 0) return;
      const tempdata: any = this.ayodhyakhandData[this.count];
      this.temp_arr = [];
      this.temp_arr.push(tempdata);
      console.log(this.ayodhyakhandData[this.count]);
    } else if (this.check_aryankand) {
      if (this.count < 0) return;
      const tempdata: any = this.aryanKandData[this.count];
      this.temp_arr = [];
      this.temp_arr.push(tempdata);
      console.log(this.aryanKandData[this.count]);
    } else if (this.check_KisKindhaKand) {
      if (this.count < 0) return;
      const tempdata: any = this.KisKindhaKandData[this.count];
      this.temp_arr = [];
      this.temp_arr.push(tempdata);
      console.log(this.KisKindhaKandData[this.count]);
    } else if (this.check_sunderkand) {
      if (this.count < 0) return;
      const tempdata: any = this.sunderkandData[this.count];
      this.temp_arr = [];
      this.temp_arr.push(tempdata);
      console.log(this.sunderkandData[this.count]);
    } else if (this.check_utarkand) {
      if (this.count < 0) return;
      const tempdata: any = this.utarkandData[this.count];
      this.temp_arr = [];
      this.temp_arr.push(tempdata);
      console.log(this.utarkandData[this.count]);
    } else {
      //
    }
  }
}
