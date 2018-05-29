import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from './routes';
import {NavbarModule} from './navbar/navbar.module';
import {SubmitModule} from './submit/submit.module';
import {ContributionsListModule} from './contributions_list/contributions_list.module';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    CommonModule,
    NavbarModule,
    SubmitModule,
    ContributionsListModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
