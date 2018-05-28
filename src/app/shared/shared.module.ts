import {NgModule} from '@angular/core';

import {HttpService} from './http.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [HttpClientModule],
  exports: [],
  providers: [HttpService]
})
export class SharedModule {
}
