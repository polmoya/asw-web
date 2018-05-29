import {NgModule} from '@angular/core';

import {MaterialModule} from '../material.module';
import {SharedModule} from '../shared/shared.module';
import {SeeProfileComponent} from './see-profile.component';

@NgModule({
  declarations: [SeeProfileComponent],
  imports: [MaterialModule, SharedModule],
  exports: []
})
export class ProfileModule {
}
