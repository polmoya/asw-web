import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from './routes';
import {NavbarModule} from './navbar/navbar.module';
import {SubmitModule} from './submit/submit.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    NavbarModule,
    SubmitModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
