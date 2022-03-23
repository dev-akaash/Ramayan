import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.page.html',
  styleUrls: ['./favourite.page.scss'],
})
export class FavouritePage implements OnInit {
  
  fav: any = [];

  constructor() { }

  ngOnInit() {
    this.fav = JSON.parse(window.localStorage.getItem('fav_array'));
    console.log(this.fav);
  }

}
