import { Injectable } from '@angular/core';
import { Demo } from '../demo';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  ramayanData = new Demo();
  chapters: any = [];

  constructor() {
    console.log(this.ramayanData.ramayan.filter(item=>item.categoryId==2))

    console.log('<>', this.getPage(2));
    this.chapters = this.ramayanData.chapterList;
  }

  getPage(id: any) {
    return this.ramayanData.ramayan.filter((data) => data.categoryId == id);
  }
}
