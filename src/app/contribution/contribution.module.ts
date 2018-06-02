import {NgModule} from '@angular/core';

import {ContributionComponent} from './contribution.component';
import {MaterialModule} from '../material.module';
import {SharedModule} from '../shared/shared.module';
import {AsksListComponent} from './asks.component';
import {NewsListComponent} from './news.component';
import {NewestListComponent} from './newest.component';
import {DetailsContributionComponent} from './details_contribution.component';

@NgModule({
  declarations: [ContributionComponent, NewsListComponent, AsksListComponent, NewestListComponent,
                  DetailsContributionComponent],
  imports: [MaterialModule, SharedModule],
  exports: []
})
export class ContributionModule {
}
