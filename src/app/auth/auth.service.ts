import {Injectable} from "@angular/core";

import {CanActivate, Router} from "@angular/router";
import {BehaviorSubject} from "rxjs/internal/BehaviorSubject";
import {Observable} from "rxjs/internal/Observable";
import {AuthService as SocialAuthService, GoogleLoginProvider} from "angular5-social-login";
import {HttpService} from "../shared/http.service";


@Injectable()
export class AuthService implements CanActivate {

  isLogged$: Observable<boolean>;
  private token: string;
  private isLoggedSource: BehaviorSubject<boolean>;

  constructor(private router: Router, private socialAuthService: SocialAuthService, private httpService: HttpService) {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;

    let isLogged = this.isAuthenticated();
    this.isLoggedSource = new BehaviorSubject<boolean>(isLogged);
    this.isLogged$ = this.isLoggedSource.asObservable()
  }

  canActivate(): boolean {
    if (this.isAuthenticated()) return true;
    this.router.navigate([""]);
    return false;
  }

  isAuthenticated() {
    return !!localStorage.getItem('currentUser');
  }

  getToken(): string {
    return this.token;
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.setToken(null);
    this.announceIsLogged();
  }

  async login() {
    let socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;

    let googleUser = await this.socialAuthService.signIn(socialPlatformProvider);
    let user = {email: googleUser.email, token: googleUser.idToken};
    let login = await this.httpService.post('users', user);
    this.setToken(login.token);
    localStorage.setItem('currentUser', JSON.stringify({
      token: login.token
    }));
    this.announceIsLogged();
  }

  private announceIsLogged() {
    let isLogged = this.isAuthenticated();
    this.isLoggedSource.next(isLogged);
  }

  private setToken(token: string) {
    this.token = token;
  }

}