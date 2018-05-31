import {NgModule} from '@angular/core';

import {ContributionComponent } from './contribution.component';
import {MaterialModule} from '../material.module';
import {SharedModule} from '../shared/shared.module';
import {AsksListComponent} from './asks.component';
import {NewsListComponent} from './news.component';
import {NewestListComponent} from './newest.component';
import {TimeAgoPipe} from 'time-ago-pipe';

@NgModule({
  declarations: [ContributionComponent, NewsListComponent, AsksListComponent, NewestListComponent, TimeAgoPipe],
  imports: [MaterialModule, SharedModule],
  exports: []
})
export class ContributionModule {
}
