import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EspecialistaNuevoPage } from './especialista-nuevo.page';

const routes: Routes = [
  {
    path: '',
    component: EspecialistaNuevoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EspecialistaNuevoPageRoutingModule {}
