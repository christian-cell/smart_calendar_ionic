import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AgendasService {

  constructor(private http : HttpClient) { }

  GetAgendasGata(){
    

    return this.http.get(`${environment.url}/agenda/agenda.php`,
      {responseType:'text'}
    )

    /* return this.http.get(`${environment.url}${especialista !== undefined ? 
    'agenda.php?especialista=' + especialista :
    'agenda.php' }` ,
    {responseType:'text'}) */ 

  }
}
