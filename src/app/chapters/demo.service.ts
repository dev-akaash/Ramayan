import { Injectable } from '@angular/core';
import { Demo } from '../demo';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  ramayanData = new Demo();
  chapters: any = [];

  constructor() {
    this.chapters = this.ramayanData.chapterList;
  }

  getPage(id: any) {
    return this.ramayanData.ramayan.filter((data) => data.categoryId == id);
  }
}
