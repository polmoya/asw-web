import {Routes} from '@angular/router';
import {SubmitComponent} from './submit/submit.component';
import {ContributionsListComponent} from './contribution/news.component';
import {SeeProfileComponent} from './profile/see-profile.component';

export const appRoutes: Routes = [
  {path: 'submit', component: SubmitComponent},
  {path: '', component: ContributionsListComponent, pathMatch: 'full'},
  {path: 'news', component: ContributionsListComponent},
  {path: 'asks', component: ContributionsListComponent},
  {path: 'contribution/:id', component: SubmitComponent},
  {path: 'user/:id', component: SeeProfileComponent},
];
