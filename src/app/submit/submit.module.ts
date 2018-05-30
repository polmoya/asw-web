import {NgModule} from '@angular/core';

import {SubmitComponent} from './submit.component';
import {SharedModule} from '../shared/shared.module';
import {MaterialModule} from "../material.module";

@NgModule({
  declarations: [SubmitComponent],
  imports: [SharedModule, MaterialModule],
  exports: [SubmitComponent]
})
export class SubmitModule {
}
