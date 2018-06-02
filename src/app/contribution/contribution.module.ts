import {NgModule} from '@angular/core';

import {ContributionComponent} from './contribution.component';
import {MaterialModule} from '../material.module';
import {SharedModule} from '../shared/shared.module';
import {AsksListComponent} from './asks.component';
import {NewsListComponent} from './news.component';
import {NewestListComponent} from './newest.component';
import {ContributionDetailsComponent} from './contribution-details.component';
import {CommentModule} from '../comment/comment.module';

@NgModule({
  declarations: [
    ContributionComponent,
    NewsListComponent,
    AsksListComponent,
    NewestListComponent,
    ContributionDetailsComponent
  ],
  imports: [MaterialModule, CommentModule, SharedModule],
  exports: []
})
export class ContributionModule {
}
