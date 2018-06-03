import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {AuthService} from './auth.service';
import {ErrorObservable} from 'rxjs-compat/observable/ErrorObservable';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private authenticationService: AuthService, private router: Router) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authenticationService.getToken();
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: token
        }
      });
    }

    return next.handle(request).catch(err => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401) {
          this.authenticationService.logout();
          this.router.navigate(['']);
        } else {
          return ErrorObservable.create(err);
        }
      }
    });
  }
}
