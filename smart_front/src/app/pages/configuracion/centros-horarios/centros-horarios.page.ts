import { Component, OnInit } from '@angular/core';
import { CentroHorarioNuevoService } from 'src/app/shared/centro-horario-nuevo.service';

@Component({
  selector: 'app-centros-horarios',
  templateUrl: './centros-horarios.page.html',
  styleUrls: ['./centros-horarios.page.scss'],
})
export class CentrosHorariosPage implements OnInit {

  horarios ? = ['cerramos','07:00','07:15','07:30','07:45','08:00','08:15','08:30','08:45','09:00','09:15','09:30','09:45','10:00','10:15','10:30','10:45','11:00','11:15','11:30','11:45','12:00','12:15','12:30','12:45','13:00','13:15','13:30','13:45','14:00','14:15','14:30','14:45','15:00','15:15','15:30','15:45','16:00','16:15','16:30','16:45','17:00','17:15','17:30','17:45','18:00','18:15','18:30','18:45','19:00','19:15','19:30','19:45','20:00','20:15','20:30','20:45','21:00','21:15','21:30','21:45'];
  horario_init : number = 7;
  centro_horario ? = {}

  constructor(private CentroHorarioNuevoService : CentroHorarioNuevoService ) { }

  ngOnInit() {
  }

  /* cambiar los null a "" para enviar al servicio */

  GuardarHorarioCentro(){
    console.log(this.centro_horario);
    return this.CentroHorarioNuevoService.createHorarioCentro(this.centro_horario);
  }

  /* CreateEspecialista(form : NgForm){
    let newEspecialista = form.value;
    console.log(newEspecialista)
    return this.especialistaNuevoService.createEspecialista(newEspecialista)
  } */

}
