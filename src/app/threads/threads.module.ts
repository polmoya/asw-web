import {NgModule} from '@angular/core';

import {MaterialModule} from '../material.module';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';
import {ThreadsComponent} from './threads.component';
import {CommentModule} from '../comment/comment.module';

@NgModule({
  declarations: [ThreadsComponent],
  imports: [MaterialModule, CommentModule, SharedModule, RouterModule],
  exports: []
})
export class ThreadsModule {
}
