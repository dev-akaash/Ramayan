import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChaptersPage } from './chapters.page';

const routes: Routes = [
  {
    path: '',
    component: ChaptersPage
  },
  {
    path: 'topic-modal',
    loadChildren: () => import('./topic-modal/topic-modal.module').then( m => m.TopicModalPageModule)
  },
  {
    path: 'popover',
    loadChildren: () => import('./popover/popover.module').then( m => m.PopoverPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChaptersPageRoutingModule {}
