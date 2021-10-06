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


  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  onSkip() {
    this.activeSlide = 3;
    this.slides.slideTo(3);
  }

  slideChangeListener = async (ev) => {
    this.activeSlide = await this.slides.getActiveIndex();
  }

  slideNext = async () => {
    this.activeSlide == 3 ? this.submit() : this.slides.slideNext();
  }

  slidePrev = async () => {
    this.slides.slidePrev();
  }

  get isNextEnable() {
    return (this.activeSlide == 0 || this.activeSlide == 1 || this.activeSlide == 2 || this.activeSlide == 3) ? true : false;
  }

  get isBackEnable() {
    return (this.activeSlide == 1 || this.activeSlide == 2 || this.activeSlide == 3) ? true : false;
  }

  submit() {
    this.navCtrl.navigateRoot('/home');
  }

}
