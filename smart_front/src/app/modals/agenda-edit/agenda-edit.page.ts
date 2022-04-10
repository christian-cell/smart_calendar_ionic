import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-agenda-edit',
  templateUrl: './agenda-edit.page.html',
  styleUrls: ['./agenda-edit.page.scss'],
})
export class AgendaEditPage implements OnInit {

  id_especialista: string;
  id_agenda: string;
  motivo: string;
  especialita: string;
  color: string;
  startTime: string;
  endTime: string;

  constructor(
    private modalController: ModalController,
    private navParams: NavParams
  ) { }

  ngOnInit() {
    console.table(this.navParams);
    console.log(this.navParams);
    this.id_agenda = this.navParams.data.id_agenda;
    this.motivo = this.navParams.data.motivo;
    this.id_especialista = this.navParams.data.id_especialista;
    this.especialita= this.navParams.data.especialita;
    this.color = this.navParams.data.color;
    this.startTime = this.navParams.data.startTime;
    this.endTime = this.navParams.data.endTime;
    console.table(this.navParams);
  }

  async closeModal() {
    const onClosedData: string = "Wrapped Up!";
    await this.modalController.dismiss(onClosedData);
  }

}
