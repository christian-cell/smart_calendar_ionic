import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EspecialistaNuevoPageRoutingModule } from './especialista-nuevo-routing.module';

import { EspecialistaNuevoPage } from './especialista-nuevo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EspecialistaNuevoPageRoutingModule
  ],
  declarations: [EspecialistaNuevoPage]
})
export class EspecialistaNuevoPageModule {}
