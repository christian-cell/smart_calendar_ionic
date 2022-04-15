import { Component, OnInit , Input} from '@angular/core';
import { HorarioCentro } from 'src/app/models/horario_centro';
import { CentroHorarioNuevoService } from 'src/app/shared/centro-horario-nuevo.service';
import { CentrosHorariosActualizaService } from 'src/app/shared/centros-horarios-actualiza.service';
import { CentrosHorariosService } from 'src/app/shared/centros-horarios.service';

@Component({
  selector: 'app-centros-horarios',
  templateUrl: './centros-horarios.page.html',
  styleUrls: ['./centros-horarios.page.scss'],
})



export class CentrosHorariosPage implements OnInit  {
  /* 
  * clase que contiene el modelo de horario 
  */
  @Input() horario: HorarioCentro = new HorarioCentro(); 
  
  horarios : any = ['cerramos','07:00','07:15','07:30','07:45','08:00','08:15','08:30','08:45','09:00','09:15','09:30','09:45','10:00','10:15','10:30','10:45','11:00','11:15','11:30','11:45','12:00','12:15','12:30','12:45','13:00','13:15','13:30','13:45','14:00','14:15','14:30','14:45','15:00','15:15','15:30','15:45','16:00','16:15','16:30','16:45','17:00','17:15','17:30','17:45','18:00','18:15','18:30','18:45','19:00','19:15','19:30','19:45','20:00','20:15','20:30','20:45','21:00','21:15','21:30','21:45'];
  horario_init : number = 7;
  // sabado_apertura_manana : string;
  centro_horario : {};
  respuesta_horario : string ;


  constructor(
    private CentroHorarioNuevoService : CentroHorarioNuevoService,
    private CentrosHorariosService : CentrosHorariosService,
    private CentroHorarioActualiza : CentrosHorariosActualizaService
  ) { }

  ngOnInit() {
    this.GetHorariosCentros();
  }

  GetHorariosCentros(){
    this.CentrosHorariosService.GetCentrosHorarios().subscribe((res:any)=>{
      console.log(res);
      let respuesta = JSON.parse(res);
      console.log(respuesta);
      this.respuesta_horario = respuesta;
      this.horario = respuesta[0];
      console.log(this.centro_horario)
    })


  }



  /* compareWith(o1, o2) {
    return o1 && o2 ? o1 === o2 : o1 === o2;
  } */

  /* cambiar los null a "" para enviar al servicio */

  GuardarHorarioCentro(){
    console.log(this.horario);


    if(this.respuesta_horario === 'centro_sin_horarios'){
      console.log('entra por centro nuevo');
      return this.CentroHorarioNuevoService.createHorarioCentro(this.horario);
    } else {
      console.log('entra tambien por actualiza');
      return this.CentroHorarioActualiza.updateHorarioCentro(this.horario);
    }     
    
  }



  /* CreateEspecialista(form : NgForm){
    let newEspecialista = form.value;
    console.log(newEspecialista)
    return this.especialistaNuevoService.createEspecialista(newEspecialista)
  } */

}
