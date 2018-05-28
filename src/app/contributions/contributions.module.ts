import {NgModule} from '@angular/core';

import {ContributionsComponent } from './contributions.component';
import {MaterialModule} from '../material.module';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [ContributionsComponent],
  imports: [MaterialModule, SharedModule],
  exports: []
})
export class ContributionsModule {
}
