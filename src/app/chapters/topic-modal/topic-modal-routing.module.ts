import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopicModalPage } from './topic-modal.page';

const routes: Routes = [
  {
    path: '',
    component: TopicModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TopicModalPageRoutingModule {}
