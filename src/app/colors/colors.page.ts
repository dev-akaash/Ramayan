import { Component, OnInit } from '@angular/core';
import { ColorPickerService, Cmyk, ColorPickerModule } from 'ngx-color-picker';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.page.html',
  styleUrls: ['./colors.page.scss'],
})
export class ColorsPage implements OnInit {

  public arrayColors: any = [
    // '#2883e9',
    // '#e920e9',
    // 'rgb(255,245,0)',
    // 'rgb(236,64,64)',
    // 'rgba(45,208,45,1)'
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

  // public onChangeColorHex8(color: string): string {
  //   const hsva = this.colorPicker.stringToHsva(color, true);

  //   if (hsva) {
  //     return this.colorPicker.outputFormat(hsva, 'rgba', null);
  //   }

  //   return '';
  // }

}
