import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EspecialistaNuevoService {

  constructor(
    private http : HttpClient
    ) { }

  createEspecialista(body:any){
    // console.log(body);
    return this.http.post(environment.url + 'especialistas/especialista_nuevo.php', body)
      .toPromise()
      .then((data:any) => {
        console.log(data)
      })  
  }
}
