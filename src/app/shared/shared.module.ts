import {NgModule} from '@angular/core';

import {HttpService} from './http.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {MaterialModule} from '../material.module';
import {TimeAgoPipe} from 'time-ago-pipe';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [TimeAgoPipe],
  imports: [
    HttpClientModule
  ],
  exports: [
    RouterModule,
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    TimeAgoPipe
  ],
  providers: [HttpService]
})
export class SharedModule {
}
