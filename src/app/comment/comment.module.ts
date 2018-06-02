import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {MaterialModule} from '../material.module';
import {SharedModule} from '../shared/shared.module';
import {CommentComponent} from './comment.component';

@NgModule({
  declarations: [CommentComponent],
  imports: [MaterialModule, SharedModule, RouterModule],
  exports: [CommentComponent]
})
export class CommentModule {
}
