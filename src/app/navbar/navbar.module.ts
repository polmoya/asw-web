import {NgModule} from '@angular/core';

import {NavbarComponent} from './navbar.component';
import {MaterialModule} from '../material.module';
import {AuthModule} from '../auth/auth.module';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [NavbarComponent],
  imports: [SharedModule, MaterialModule, AuthModule],
  exports: [NavbarComponent]
})
export class NavbarModule {
}
