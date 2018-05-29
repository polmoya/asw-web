import {NgModule} from '@angular/core';

import {HttpService} from './http.service';
import {HttpClientModule} from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatCardModule, MatInputModule, MatList, MatListItem, MatListModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
  ],
  exports: [
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    FormsModule,
    MatCardModule,
    FlexLayoutModule,
  ],
  providers: [HttpService]
})
export class SharedModule {
}
