import { Component, OnInit } from '@angular/core';
import { ColorPickerService, Cmyk, ColorPickerModule } from 'ngx-color-picker';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.page.html',
  styleUrls: ['./colors.page.scss'],
})
export class ColorsPage implements OnInit {

  public arrayColors: any = [
    'Dog',
    'Cat',
    'Rat',
    'Cow',
    'Duck'
  ];

  constructor(
    private colorPicker: ColorPickerModule,
  ) { }

  ngOnInit() {
  }

  public onEventLog(event: string, data: any): void {
    console.log(event, data);
  }

  public onChangeColor(color: string): void {
    console.log('Color changed:', color);
  }

}
