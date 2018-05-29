import {NgModule} from '@angular/core';

import {ContributionsListComponent } from './contributions_list.component';
import {MaterialModule} from '../material.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [ContributionsListComponent],
  imports: [MaterialModule, SharedModule],
  exports: []
})
export class ContributionsListModule {
}
