import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Demo } from './demo';

@Injectable({
  providedIn: 'root',
})
export class NameService {
  ramayanData = new Demo();
  chapters: any = [];

  constructor() {
    this.chapters = this.ramayanData.chapterList;
  }

  getPage(id: any) {
    return this.ramayanData.ramayan.filter((data) => {
      data.categoryId == id;
    });
  }
}
