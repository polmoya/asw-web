import {Routes} from '@angular/router';
import {SubmitComponent} from './submit/submit.component';
import {NewsListComponent} from './contribution/news.component';
import {SeeProfileComponent} from './profile/see-profile.component';
import {AsksListComponent} from './contribution/asks.component';
import {NewestListComponent} from './contribution/newest.component';
import {DetailsContributionComponent} from './contribution/details_contribution.component';

export const appRoutes: Routes = [
  {path: 'submit', component: SubmitComponent},
  {path: '', component: NewsListComponent, pathMatch: 'full'},
  {path: 'news', component: NewestListComponent},
  {path: 'asks', component: AsksListComponent},
  {path: 'contribution/:id', component: DetailsContributionComponent},
  {path: 'user/:id', component: SeeProfileComponent},
];
