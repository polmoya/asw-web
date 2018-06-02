import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AuthServiceConfig, GoogleLoginProvider, SocialLoginModule} from 'angular5-social-login';

import {AppComponent} from './app.component';
import {appRoutes} from './routes';
import {NavbarModule} from './navbar/navbar.module';
import {SubmitModule} from './submit/submit.module';
import {ProfileModule} from './profile/profile.module';
import {ContributionModule} from './contribution/contribution.module';
import {AuthModule} from './auth/auth.module';
import {CommentModule} from './comment/comment.module';
import {ThreadsModule} from './threads/threads.module';

export function getAuthServiceConfigs() {
  return new AuthServiceConfig([{
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('443234130566-cba0cgt2np2alo9e3jhpb7au9hmeptoh.apps.googleusercontent.com')
  }]);
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    CommonModule,
    FormsModule,
    SocialLoginModule,
    NavbarModule,
    SubmitModule,
    FormsModule,
    ProfileModule,
    ContributionModule,
    AuthModule,
    CommentModule,
    ThreadsModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
