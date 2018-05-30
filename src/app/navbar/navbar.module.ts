import {NgModule} from '@angular/core';

import {NavbarComponent} from './navbar.component';
import {MaterialModule} from '../material.module';
import {AuthModule} from "../auth/auth.module";

@NgModule({
  declarations: [NavbarComponent],
  imports: [MaterialModule, AuthModule],
  exports: [NavbarComponent]
})
export class NavbarModule {
}
