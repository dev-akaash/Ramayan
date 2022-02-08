import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChaptersPageRoutingModule } from './chapters-routing.module';

import { ChaptersPage } from './chapters.page';
import {PathVidhiComponent} from './path-vidhi/path-vidhi.component';
;

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChaptersPageRoutingModule
  ],
  declarations: [ChaptersPage,PathVidhiComponent]
})
export class ChaptersPageModule {}
