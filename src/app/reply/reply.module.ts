import {NgModule} from '@angular/core';

import {ReplyComponent} from './reply.component';
import {SharedModule} from '../shared/shared.module';
import {MaterialModule} from '../material.module';

@NgModule({
  declarations: [ReplyComponent],
  imports: [SharedModule, MaterialModule],
  exports: [ReplyComponent]
})
export class ReplyModule {
}
