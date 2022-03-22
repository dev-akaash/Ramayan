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

  fontSize:any = 16

  chapter_id: any;
  chapter_name: any;
  data: any = [];
  public ayodhyakhandData:any =[];
  public aryanKandData:any [];
  public check_ayodhyakhandData = false
  public sunderkandData:any[];
  public check_sunderkand= false
  public check_aryankand = false
  public check_utarkand =false
  public check_KisKindhaKand = false;
  public KisKindhaKandData:any []
  public check_balkand = false
  public balkandData:any []
  public utarkandData:any[]
  public check_PathVidhi:boolean = false
  public PathVidhiData:any[]
  public PathVidhipathvidhi_vinyogData:any 
  public subTopics: any = [];
  constructor(
    private route: ActivatedRoute,
    private modaCtrl: ModalController,
    private popoverCtrl: PopoverController,
    private demoService: DemoService
  ) { 
   
    // this.demoService.fontSize$.next(16)
    // this.demoService.fontSize$.subscribe((res:any)=>{
    //   this.fontSize =res
    //   alert(res)
    // })
  }

  ngOnInit() {
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
    if(this.chapter_id ==1){
      this.check_PathVidhi = true;
      this.PathVidhiData = this.demoService.PathVidhiModel.pathvidhi
      this.PathVidhipathvidhi_vinyogData = this.demoService.PathVidhiModel.pathvidhi_vinyog
    }
    if(this.chapter_id ==4){
      this.subTopics = [];
      this.check_balkand = true;
      this.balkandData = this.demoService.balkandModel.balkand;

      this.balkandData.forEach((item: any) => {
        this.subTopics.push(item.adhya);
      });

      console.table(this.balkandData);
    }
    if(this.chapter_id == 5){
      this.subTopics = [];
    this.ayodhyakhandData = this.demoService.ayodhyakandsModel.ayodhyakands;
    this.check_ayodhyakhandData = true;

    this.ayodhyakhandData.forEach((item: any) => {
      this.subTopics.push(item.adhya);
    });
    }
    if(this.chapter_id == 6){
      this.subTopics = [];
      this.check_aryankand = true
      this.aryanKandData = this.demoService.AryanKandModel.arryanKhand;

      this.aryanKandData.forEach((item: any) => {
        this.subTopics.push(item.adhya);
      });
    }
    if(this.chapter_id == 7){
      this.subTopics = [];
      this.check_KisKindhaKand = true;
      this.KisKindhaKandData = this.demoService.KisKindhaKandModel.kisKindhaKand;

      this.KisKindhaKandData.forEach((item: any) => {
        this.subTopics.push(item.adhya);
      });
    }
    if(this.chapter_id == 8){
      this.subTopics = [];
      this.check_sunderkand = true;
      this.sunderkandData = this.demoService.sunderkhandModel.sundarkand;

      this.sunderkandData.forEach((item: any) => {
        this.subTopics.push(item.adhya);
      });
    }
    if(this.chapter_id==10){
      this.subTopics = [];
      this.check_utarkand = true;
      this.utarkandData = this.demoService.utarkandModle.utarkand;

      this.utarkandData.forEach((item: any) => {
        this.subTopics.push(item.adhya);
      });
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
      componentProps: {subtopics: this.subTopics}
    });
    return modal.present();
  }

  async onPopover(event: any, id?: any) {
    const popover = await this.popoverCtrl.create({
      component: PopoverPage,
      componentProps: {'slok_id': id},
      event: event,
    });
    popover.present();
  }

}
