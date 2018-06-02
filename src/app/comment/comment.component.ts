import {Component, Input} from '@angular/core';

import {Comment} from './comment.model';


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html'
})
export class CommentComponent {

  @Input() comments: Comment[];
  @Input() showOn: boolean;

}
