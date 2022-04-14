import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CentrosHorariosPageRoutingModule } from './centros-horarios-routing.module';

import { CentrosHorariosPage } from './centros-horarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CentrosHorariosPageRoutingModule
  ],
  declarations: [CentrosHorariosPage]
})
export class CentrosHorariosPageModule {}
