import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
    this.Logout();
  }

  Logout(){
    setTimeout(() => {
      window.localStorage.removeItem('token');
      window.localStorage.removeItem('id_centro');
      window.localStorage.removeItem('id_usuario');
      this.router.navigate(['/login']);
    }, 1000);
  }

}
