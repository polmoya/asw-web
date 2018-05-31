import {Routes} from '@angular/router';
import {SubmitComponent} from './submit/submit.component';
import {NewsListComponent} from './contribution/news.component';
import {SeeProfileComponent} from './profile/see-profile.component';
import {AsksListComponent} from './contribution/asks.component';
import {NewestListComponent} from './contribution/newest.component';

export const appRoutes: Routes = [
  {path: 'submit', component: SubmitComponent},
  {path: '', component: NewsListComponent, pathMatch: 'full'},
  {path: 'news', component: NewestListComponent},
  {path: 'asks', component: AsksListComponent},
  // TODO : Canviar SeeProfileComponent per detalls/comentar contribution
  {path: 'contribution/:id', component: SeeProfileComponent},
  {path: 'user/:id', component: SeeProfileComponent},
];
