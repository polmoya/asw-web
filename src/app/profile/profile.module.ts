import {NgModule} from '@angular/core';

import {MaterialModule} from '../material.module';
import {SharedModule} from '../shared/shared.module';
import {SeeProfileComponent} from './see-profile.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [SeeProfileComponent],
  imports: [MaterialModule, SharedModule, RouterModule],
  exports: []
})
export class ProfileModule {
}
