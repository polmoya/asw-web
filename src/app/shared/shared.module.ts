import {NgModule} from '@angular/core';

import {HttpService} from './http.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {MaterialModule} from "../material.module";

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    MaterialModule
  ],
  exports: [
    RouterModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [HttpService]
})
export class SharedModule {
}
