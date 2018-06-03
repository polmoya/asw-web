import {Component, Input} from '@angular/core';

import {Comment} from './comment.model';
import {HttpService} from "../shared/http.service";


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {

  @Input() comments: Comment[];
  @Input() showOn: boolean;

  constructor(private httpService: HttpService) {
  }

  async deleteComment(commentId: number) {
    await this.httpService.delete(`comments/${commentId}`);
    let index = this.comments.findIndex(comment => comment.id === commentId);
    if (index > -1) {
      this.comments.splice(index, 1);
    }
  }
}
