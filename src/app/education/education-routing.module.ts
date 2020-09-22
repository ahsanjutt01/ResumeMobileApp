import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EducationPage } from './education.page';

const routes: Routes = [
  {
    path: '',
    component: EducationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EducationPageRoutingModule {}
