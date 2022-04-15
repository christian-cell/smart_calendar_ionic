import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, ValidationErrors, AbstractControl, NgForm } from "@angular/forms";
import { Router } from '@angular/router';
import { UsuarioNuevoService } from 'src/app/shared/usuario-nuevo.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  ionicForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private usuarioNuevoService : UsuarioNuevoService,
    private router : Router  
  ) { }

  ngOnInit() {
  }

  CreateUsuario(form : NgForm){
    let newUsuario = form.value;
    console.log(newUsuario);
    return this.usuarioNuevoService.createUsuario(newUsuario)
  }

  takeMeToLogin(){
    console.log('me lle ve a login');
    this.router.navigate(['/login']);
  }

}
