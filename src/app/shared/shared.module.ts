import {NgModule} from '@angular/core';

import {HttpService} from './http.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {MaterialModule} from '../material.module';
import {TimeAgoPipe} from 'time-ago-pipe';

@NgModule({
  declarations: [TimeAgoPipe],
  imports: [
    HttpClientModule
  ],
  exports: [
    RouterModule,
    BrowserAnimationsModule,
    FormsModule,
    TimeAgoPipe
  ],
  providers: [HttpService]
})
export class SharedModule {
}
