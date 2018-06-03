import {Component, Input} from '@angular/core';

import {Comment} from './comment.model';
import {HttpService} from '../shared/http.service';
import {AuthService} from '../auth/auth.service';
import {User} from '../shared/user.model';


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {

  @Input() comments: Comment[];
  @Input() showOn: boolean;
  loggedUser: User;

  constructor(private authService: AuthService, private httpService: HttpService) {
    this.authService.isLogged$.subscribe(async () => {
      this.loggedUser = this.authService.getCurrentUser();
    });
  }

  async deleteComment(commentId: number) {
    await this.httpService.delete(`comments/${commentId}`);
    const index = this.comments.findIndex(comment => comment.id === commentId);
    if (index > -1) {
      this.comments.splice(index, 1);
    }
  }

  isMine(commentId: number): boolean {
    const comment = this.comments.find(c => c.id === commentId);
    return this.loggedUser === null ? false : comment.username === this.loggedUser.email;
  }

  isNotVoted(commentId: number): boolean {
    const comment = this.comments.find(c => c.id === commentId);
    return this.loggedUser === null ? false : !comment.votes.includes(this.loggedUser.email);
  }

}
