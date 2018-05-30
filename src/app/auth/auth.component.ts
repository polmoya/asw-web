import {Component, OnInit} from '@angular/core';
import {AuthService} from "./auth.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent implements OnInit {

  isLogged: boolean;


  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.isLogged$.subscribe(async isLogged => {
      this.isLogged = isLogged
    })
  }

  login(): void {
    this.authService.login();
  }

  logout(): void {
    this.authService.logout();
  }
}
