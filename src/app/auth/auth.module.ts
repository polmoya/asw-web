import {NgModule} from '@angular/core';

import {SharedModule} from '../shared/shared.module';
import {MaterialModule} from '../material.module';
import {AuthService} from './auth.service';
import {AuthComponent} from './auth.component';

@NgModule({
  declarations: [AuthComponent],
  imports: [SharedModule, MaterialModule],
  exports: [AuthComponent],
  providers: [AuthService]
})
export class AuthModule {
}
