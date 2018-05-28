import {Routes} from '@angular/router';
import {SubmitComponent} from './submit/submit.component';
import {ContributionsComponent} from './contributions/contributions.component';

export const appRoutes: Routes = [
  {path: 'submit', component: SubmitComponent},
  {path: '', component: ContributionsComponent, pathMatch: 'full'},
  {path: 'news', component: ContributionsComponent},
  {path: 'asks', component: ContributionsComponent},
];
