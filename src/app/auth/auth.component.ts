import {Component, OnInit} from '@angular/core';
import {AuthService} from './auth.service';
import {User} from "../shared/user.model";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent implements OnInit {

  isLogged: boolean;
  user: User;


  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.isLogged$.subscribe(async isLogged => {
      this.isLogged = isLogged;
      this.user = this.authService.getCurrentUser();
    });
  }

  login(): void {
    this.authService.login();
  }

  logout(): void {
    this.authService.logout();
  }
}
