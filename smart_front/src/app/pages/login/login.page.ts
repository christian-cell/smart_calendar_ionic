import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/shared/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private loginService : LoginService) { }

  ngOnInit() {
  }

  LoginUsuario(form : NgForm){
    let usuario = form.value;
    console.log(usuario);
    return this.loginService.Login(usuario)
  }

}
