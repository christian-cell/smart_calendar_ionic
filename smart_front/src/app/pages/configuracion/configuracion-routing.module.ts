import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfiguracionPage } from './configuracion.page';

const routes: Routes = [
  {
    path: '',
    component: ConfiguracionPage
  },
  {
    path: 'especialista-nuevo',
    loadChildren: () => import('./especialista-nuevo/especialista-nuevo.module').then( m => m.EspecialistaNuevoPageModule)
  },
  {
    path: 'tarea-nueva',
    loadChildren: () => import('./tarea-nueva/tarea-nueva.module').then( m => m.TareaNuevaPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)  ],
  exports: [RouterModule],
})
export class ConfiguracionPageRoutingModule {}
