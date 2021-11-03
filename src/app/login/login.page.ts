import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  temp1: boolean = false;
  private video: HTMLVideoElement;
  @ViewChild('video') video123: ElementRef;

  constructor(
    private videoRef: ElementRef,
    private router: Router
  ) { }

  async ngOnInit() {
    this.video = this.videoRef.nativeElement;
    this.video.addEventListener("load", e => {
      this.videoRef.nativeElement.play();
      this.video123.nativeElement.play();
    });
    setTimeout(() => {
      this.temp1 = false;
    }, 11000);
  }

  onPage(name: string) {
    this.router.navigateByUrl('/login/texts/'+JSON.stringify({flag: name}));
  }
}
