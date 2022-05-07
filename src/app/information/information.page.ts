import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, NavController } from '@ionic/angular';

@Component({
  selector: 'app-information',
  templateUrl: './information.page.html',
  styleUrls: ['./information.page.scss'],
})
export class InformationPage implements OnInit {

  @ViewChild(IonSlides) slides: IonSlides;
  activeSlide: number = 0;
  imagesArr: any = [
    '/assets/skip1.jpg',
    '/assets/skip2.jpg',
    '/assets/skip3.jpg',
    '/assets/skip4.jpg',
    '/assets/skip4.1.png',
    '/assets/skip4.2.png',
    '/assets/skip5.jpg',
  ];

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    console.log(this.imagesArr);
  }

  onSkip() {
    this.activeSlide = 6;
    this.slides.slideTo(6);
  }

  slideChangeListener = async (ev) => {
    this.activeSlide = await this.slides.getActiveIndex();
  }

  slideNext = async () => {
    this.activeSlide == 6 ? this.submit() : this.slides.slideNext();
  }

  slidePrev = async () => {
    this.slides.slidePrev();
  }

  get isNextEnable() {
    return (this.activeSlide == 0 || this.activeSlide == 1 || this.activeSlide == 2 || this.activeSlide == 3 || this.activeSlide == 4 || this.activeSlide == 5 || this.activeSlide == 6) ? true : false;
  }

  get isBackEnable() {
    return (this.activeSlide == 1 || this.activeSlide == 2 || this.activeSlide == 3 || this.activeSlide == 4 || this.activeSlide == 5 || this.activeSlide == 6) ? true : false;
  }

  submit() {
    this.navCtrl.navigateRoot('/home');
  }

}
