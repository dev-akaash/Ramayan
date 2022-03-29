import { Injectable } from '@angular/core';
import { Demo } from '../database/demo';
import {Ayodhyakand} from '../database/Ayodhyakand';
import {AryanKand} from '../database/aryankand';
import { Sundarkand } from '../database/sundarkand';
import { UtarKand } from '../database/utarkand';
import { KisKindhaKand } from '../database/kiskindhaKand';
import {BalKand} from '../database/balkand';
import { BehaviorSubject, Subject } from 'rxjs';

import {PathVidhi} from '../database/pathvidhi';
import { Yudhkand } from '../database/yudhkand';
import { Mahatmya } from '../database/mahatmya';
import { Stuti } from '../database/stuti';



@Injectable({
  providedIn: 'root'
})
export class DemoService {

  ramayanData = new Demo();

  chapters: any = [];
  ayodhyakandsModel =  new  Ayodhyakand()
  ayodhyakands:any = []
  AryanKandModel = new AryanKand();
  sunderkhandModel = new Sundarkand();
  utarkandModle = new UtarKand()
  KisKindhaKandModel = new KisKindhaKand();
  balkandModel = new BalKand()
  AryanKandData:any [];
  PathVidhiModel = new PathVidhi()
  yudhkandModle = new Yudhkand();
  mahatmyaModel = new Mahatmya();
  stutiModel = new Stuti();
  stutiModle: any;
  
  constructor() {
    this.chapters = this.ramayanData.chapterList;
    this.ayodhyakands = this.ayodhyakandsModel.ayodhyakands;
    this.AryanKandData = this.AryanKandModel.arryanKhand;
  }

  getPage(id: any) {
    return this.ramayanData.ramayan.filter((data) => data.categoryId == id);
  }
 
 
}
