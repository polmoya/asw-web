import {NgModule} from '@angular/core';

import {ContributionComponent } from './contribution.component';
import {MaterialModule} from '../material.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [ContributionComponent],
  imports: [MaterialModule, SharedModule],
  exports: []
})
export class ContributionModule {
}
