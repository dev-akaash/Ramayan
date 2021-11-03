import { NameService } from './data.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  chapterList: any = [];

  temp1: boolean = true;
  temp2: boolean = false;

  constructor(
    private nameService: NameService,
    private router: Router
  ) {
    this.chapterList = this.nameService.chapters;
  }

  onClick(id, name) {
    this.router.navigateByUrl('/chapters/'+JSON.stringify({id: id, name: name}));
  }

}
