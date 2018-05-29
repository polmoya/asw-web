import {NgModule} from '@angular/core';

import {ContributionComponent } from './contribution.component';
import {MaterialModule} from '../material.module';
import {SharedModule} from '../shared/shared.module';
import {ContributionsListComponent} from './news.component';

@NgModule({
  declarations: [ContributionComponent, ContributionsListComponent],
  imports: [MaterialModule, SharedModule],
  exports: []
})
export class ContributionModule {
}
