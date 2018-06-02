import {Routes} from '@angular/router';
import {SubmitComponent} from './submit/submit.component';
import {NewsListComponent} from './contribution/news.component';
import {SeeProfileComponent} from './profile/see-profile.component';
import {AsksListComponent} from './contribution/asks.component';
import {NewestListComponent} from './contribution/newest.component';
import {ContributionDetailsComponent} from './contribution/contribution-details.component';
import {MyProfileComponent} from './profile/my-profile.component';
import {ThreadsComponent} from './threads/threads.component';

export const appRoutes: Routes = [
  {path: 'submit', component: SubmitComponent},
  {path: '', component: NewsListComponent, pathMatch: 'full'},
  {path: 'news', component: NewestListComponent},
  {path: 'asks', component: AsksListComponent},
  {path: 'contribution/:id', component: ContributionDetailsComponent},
  {path: 'user/myProfile', component: MyProfileComponent},
  {path: 'user/:id', component: SeeProfileComponent},
  {path: 'threads/:id', component: ThreadsComponent},
];
