import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-texts',
  templateUrl: './texts.page.html',
  styleUrls: ['./texts.page.scss'],
})
export class TextsPage implements OnInit {
  paramData: any;
  fontSize = 18;
  heading: string;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let flag = JSON.parse(this.route.snapshot.params['name']);
    this.paramData = flag.flag;
    if (this.paramData == 'sahyogi') this.heading = 'धर्म सहयोगी';
    else if (this.paramData == 'app') this.heading = 'एप्प का उद्देश्य';
    else this.heading = 'हमसे जुड़े'
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
    if(this.fontSize <= 18) {
      return;
    }
    $('div').css('font-size', `${this.fontSize.toString()}px`);
  }

}
