import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CentrosHorariosService {

  constructor(private http : HttpClient) { }


  GetCentrosHorarios(){
    

    return this.http.get(`${environment.url}/centros/centros_horarios.php`,
      {responseType:'text'}
    )

  }
}
