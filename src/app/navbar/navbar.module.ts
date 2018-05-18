import {NgModule} from '@angular/core';

import {NavbarComponent} from './navbar.component';
import {MaterialModule} from '../material.module';

@NgModule({
  declarations: [NavbarComponent],
  imports: [MaterialModule],
  exports: [NavbarComponent]
})
export class NavbarModule {
}
