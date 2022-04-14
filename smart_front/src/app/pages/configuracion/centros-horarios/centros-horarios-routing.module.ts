import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CentrosHorariosPage } from './centros-horarios.page';

const routes: Routes = [
  {
    path: '',
    component: CentrosHorariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CentrosHorariosPageRoutingModule {}
