import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EspecialistaNuevoService } from 'src/app/shared/especialista-nuevo.service';

@Component({
  selector: 'app-especialista-nuevo',
  templateUrl: './especialista-nuevo.page.html',
  styleUrls: ['./especialista-nuevo.page.scss'],
})
export class EspecialistaNuevoPage implements OnInit {

  constructor( private especialistaNuevoService : EspecialistaNuevoService ) { }

  ngOnInit() {
  }

  CreateEspecialista(form : NgForm){
    let newEspecialista = form.value;
    console.log(newEspecialista)
    return this.especialistaNuevoService.createEspecialista(newEspecialista)
  }

}
