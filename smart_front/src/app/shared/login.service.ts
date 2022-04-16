import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient, private router : Router) { }
  
  Login(body){
    

    return this.http.post(environment.url + 'usuarios/login.php', body)
    .toPromise()
    .then((data:any) => {
      console.log(data);
      window.localStorage.setItem('token',data.token);
      window.localStorage.setItem('id_centro',data.id_centro);
      window.localStorage.setItem('id_usuario',data.id_usuario);
      this.router.navigate(['/calendar'])
    }) 

    

  }
}
