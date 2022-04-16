import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AgendasService {

  constructor(private http : HttpClient) { }

  GetAgendasGata(){
    
    let token = window.localStorage.getItem('token');
    let id_centro = window.localStorage.getItem('id_centro');

    return this.http.get(`${environment.url}/agenda/agenda.php?token=${token}&&id_centro=${id_centro}`,
      {responseType:'text'}
    )

    /* return this.http.get(`${environment.url}${especialista !== undefined ? 
    'agenda.php?especialista=' + especialista :
    'agenda.php' }` ,
    {responseType:'text'}) */ 

  }
}
