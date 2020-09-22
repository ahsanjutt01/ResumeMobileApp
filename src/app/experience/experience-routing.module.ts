import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExperiencePage } from './experience.page';

const routes: Routes = [
  {
    path: '',
    component: ExperiencePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExperiencePageRoutingModule {}
