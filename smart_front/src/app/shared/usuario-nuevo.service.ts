import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioNuevoService {

  constructor(private http : HttpClient) { }

  createUsuario(body:any){
    // console.log(body);
    return this.http.post(environment.url + 'usuarios/usuario_nuevo.php', body)
      .toPromise()
      .then((data:any) => {
        console.log(data)
      })  
  }
}
