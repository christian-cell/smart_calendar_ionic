import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalendarPageRoutingModule } from './calendar-routing.module';

import { CalendarPage } from './calendar.page';

/* calendar_ionic-2 */
import { NgCalendarModule  } from 'ionic2-calendar';
import { CalModalPageModule } from '../cal-modal/cal-modal.module';
 
import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
registerLocaleData(localeDe);

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendarPageRoutingModule,
    NgCalendarModule,
    CalModalPageModule
  ],
  declarations: [CalendarPage],
  /* providers: [
    { provide: LOCALE_ID, useValue: 'es_ES' }
  ] */
})
export class CalendarPageModule {}
