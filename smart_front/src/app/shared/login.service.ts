import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient) { }
  
  Login(body){
    

    return this.http.post(environment.url + 'usuarios/login.php', body)
      .toPromise()
      .then((data:any) => {
        console.log(data)
      }) 

    

  }
}
