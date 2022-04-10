// import { Component, OnInit } from '@angular/core';
// import { CalendarComponent } from 'ionic2-calendar/calendar';
import { CalendarComponent } from 'ionic2-calendar';
import { AlertController, ModalController } from '@ionic/angular';
import { CalendarMode } from 'ionic2-calendar/calendar';
import { formatDate } from '@angular/common';
import { CalModalPage } from '../cal-modal/cal-modal.page';
import { Component, ViewChild, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { AgendasService } from 'src/app/shared/agendas.service';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { PopoverController } from '@ionic/angular';
import { AgendaEditPage } from 'src/app/modals/agenda-edit/agenda-edit.page';





/* 
  import { CalendarComponent } from 'ionic2-calendar/calendar';
import { Component, ViewChild, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { formatDate } from '@angular/common';
import { CalModalPage } from '../pages/cal-modal/cal-modal.page';
*/
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {

  eventSource = [];
  viewTitle: string;
 
  calendar = {
    mode: 'week',
    /* mode: 'week' as CalendarMode, */
    currentDate: new Date(),
  };

  selectedDate: Date;

  @ViewChild(CalendarComponent) myCal: CalendarComponent;

  constructor(
    private alertCtrl: AlertController,
    @Inject(LOCALE_ID) private locale: string, 
    private modalCtrl: ModalController,
    private agendaService : AgendasService,
    public popoverController: PopoverController,
    public modalController: ModalController
  ) { }

  ngOnInit() {
    
    this.GetAgenda();
  }

  next() {
    this.myCal.slideNext();
  }
 
  back() {
    this.myCal.slidePrev();
  }
 
  // Selected date reange and hence title changed
  onViewTitleChanged(title) {
    this.viewTitle = title;
  }
 
  // Calendar event was clicked
  async onEventSelected(ev) {

    const modal = await this.modalController.create({
      component: AgendaEditPage,
      componentProps: {
        "id_agenda": ev.id_agenda,
        "id_especialista": ev.id_especialista,
        "title": ev.title,
        "startTime": ev.startTime,
        "endTime": ev.endTime,
        "motivo": ev.motivo,
        "especialista": ev.especialista,
        "color": ev.color
      }
    });

    modal.onDidDismiss().then((dataReturned) => {
      /* if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        
      } */
    });

    return await modal.present();

    /* const popover = await this.popoverController.create({
      component: AgendaEditPopoverPage,
      componentProps:{
        id_agenda : ev.id_agenda
      },
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    await popover.present();
  
    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role); */

    
  }

  GetAgenda(){
    this.agendaService.GetAgendasGata().subscribe((res:any)=>{
      console.log(JSON.parse(res));
      let respuesta = JSON.parse(res);
      
      for (let i = 0; i < respuesta.length; i++) {
        respuesta[i].startTime = new Date(respuesta[i].startTime);
        respuesta[i].endTime = new Date(respuesta[i].endTime);
        this.eventSource.push(respuesta[i]);
      }

      console.log(respuesta)
      /* this.eventSource = respuesta */  /* JSON.parse(res) */;
    })

    /* console.log(especialista);
    this.agendaService.GetAgendasGata(especialista).subscribe((res: any) => {
      this.agendasArr = res;
      console.log(JSON.parse(this.agendasArr));
      this.calendarOptions.events = JSON.parse(this.agendasArr);
    }); */
  }

 
 
  /* createRandomEvents() {
    var events = [];
    for (var i = 0; i < 5 ; i += 1) {
      var date = new Date();
      var eventType = Math.floor(Math.random() * 2);
      var startDay = Math.floor(Math.random() * 90) - 45;
      var endDay = Math.floor(Math.random() * 2) + startDay;
      var startTime;
      var endTime;
      if (eventType === 0) {
        startTime = new Date(
          Date.UTC(
            date.getUTCFullYear(),
            date.getUTCMonth(),
            date.getUTCDate() + startDay
          )
        );
        if (endDay === startDay) {
          endDay += 1;
        }
        endTime = new Date(
          Date.UTC(
            date.getUTCFullYear(),
            date.getUTCMonth(),
            date.getUTCDate() + endDay
          )
        );
        events.push({
          title: 'All Day - ' + i,
          startTime: startTime,
          endTime: endTime,
          allDay: true,
        });
      } else {
        var startMinute = Math.floor(Math.random() * 24 * 60);

        var endMinute = Math.floor(Math.random() * 180) + startMinute;
        startTime = new Date(
          date.getFullYear(),
          date.getMonth(),
          date.getDate() + startDay,
          0,
          date.getMinutes() + startMinute
        );
        endTime = new Date(
          date.getFullYear(),
          date.getMonth(),
          date.getDate() + endDay,
          0,
          date.getMinutes() + endMinute
        );
        events.push({
          title: 'Event - ' + i,
          startTime: startTime,
          endTime: endTime,
          allDay: false,
        });
      }
    }
    console.log(events)
    this.eventSource = events;
  } */   


  // Use Angular date pipe for conversion
    /* let start = formatDate(event.startTime, 'medium', this.locale);
    let end = formatDate(event.endTime, 'medium', this.locale);
 
    const alert = await this.alertCtrl.create({
      header: event.title,
      subHeader: event.desc,
      message: 'From: ' + start + '<br><br>To: ' + end,
      buttons: ['OK'],
    });
    alert.present(); 
  }

  async openCalModal(event?) { */

    /* console.log(event);

    const modal = await this.modalCtrl.create({
      component: CalModalPage,
      cssClass: 'cal-modal',
      backdropDismiss: false
    });
   
    await modal.present();
   
    modal.onDidDismiss().then((result) => {
      console.log(result);
      if (result.data && result.data.event) {
        let event = result.data.event;
        if (event.allDay) {
          let start = event.startTime;
          event.startTime = new Date(
            Date.UTC(
              start.getUTCFullYear(),
              start.getUTCMonth(),
              start.getUTCDate()
            )
          );
          event.endTime = new Date(
            Date.UTC(
              start.getUTCFullYear(),
              start.getUTCMonth(),
              start.getUTCDate() + 1
            )
          );
        }
        this.eventSource.push(result.data.event);
        this.myCal.loadEvents();
      }
    });  */

 
  removeEvents() {
    this.eventSource = [];
  }
  
}
