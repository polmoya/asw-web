import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS} from '@angular/common/http';

import {SharedModule} from '../shared/shared.module';
import {MaterialModule} from '../material.module';
import {AuthService} from './auth.service';
import {AuthComponent} from './auth.component';
import {JwtInterceptor} from './jwt.interceptor';

@NgModule({
  declarations: [AuthComponent],
  imports: [SharedModule, MaterialModule],
  exports: [AuthComponent],
  providers: [
    AuthService,
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}
  ]
})
export class AuthModule {
}
