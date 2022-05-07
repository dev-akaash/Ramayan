import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TopicModalPageRoutingModule } from './topic-modal-routing.module';

import { TopicModalPage } from './topic-modal.page';
import { FilterPipe } from './filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TopicModalPageRoutingModule
  ],
  declarations: [TopicModalPage, FilterPipe]
})
export class TopicModalPageModule {}
