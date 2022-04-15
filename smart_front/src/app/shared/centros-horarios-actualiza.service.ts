import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CentrosHorariosActualizaService {

  constructor(private http : HttpClient) { }

  updateHorarioCentro(body:any){
    // console.log(body);
    return this.http.post(environment.url + 'centros/centro_horario_actualiza.php', body)
      .toPromise()
      .then((data:any) => {
        console.log(data)
      })  
  }
}
