import {NgModule} from '@angular/core';

import {MaterialModule} from '../material.module';
import {SharedModule} from '../shared/shared.module';
import {SeeProfileComponent} from './see-profile.component';
import {RouterModule} from '@angular/router';
import {MyProfileComponent} from './my-profile.component';

@NgModule({
  declarations: [SeeProfileComponent, MyProfileComponent],
  imports: [MaterialModule, SharedModule, RouterModule],
  exports: []
})
export class ProfileModule {
}
