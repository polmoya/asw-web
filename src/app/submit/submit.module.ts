import {NgModule} from '@angular/core';

import {SubmitComponent} from './submit.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule, MatInputModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [SubmitComponent],
  imports: [MatFormFieldModule, MatInputModule, BrowserAnimationsModule, FormsModule, SharedModule, MatCardModule],
  exports: [SubmitComponent]
})
export class SubmitModule {
}
