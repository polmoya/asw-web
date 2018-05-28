import {NgModule} from '@angular/core';

import {SubmitComponent} from './submit.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [SubmitComponent],
  imports: [SharedModule],
  exports: [SubmitComponent]
})
export class SubmitModule {
}
