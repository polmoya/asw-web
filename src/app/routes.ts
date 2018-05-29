import {Routes} from '@angular/router';
import {SubmitComponent} from './submit/submit.component';
import {ContributionsListComponent} from './contributions_list/contributions_list.component';

export const appRoutes: Routes = [
  {path: 'submit', component: SubmitComponent},
  {path: '', component: ContributionsListComponent, pathMatch: 'full'},
  {path: 'news', component: ContributionsListComponent},
  {path: 'asks', component: ContributionsListComponent},
  {path: 'contribution/:id', component: SubmitComponent},
];
