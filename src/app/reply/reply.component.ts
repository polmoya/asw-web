import {Component} from '@angular/core';
import {Comment} from '../shared/comment.model';
import {HttpService} from '../shared/http.service';
import {Router} from '@angular/router';
import {Contribution} from '../shared/contribution.model';

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.css']
})

export class ReplyComponent {
  reply: Comment;
  parent_comment: Comment;
  contribution: Contribution;

  constructor(private httpService: HttpService, private router: Router) {
    this.reply = new Comment();
    this.parent_comment = new Comment();
    this.parent_comment.text = 'Títol comment al que fem reply';
    this.contribution = new Contribution();
    this.contribution.title = 'Títol de la contribucio';
    this.contribution.user = 'foo@gmail.com';
  }

  async doReply(): Promise<any> {
    await this.httpService.post('asks', this.reply);
    this.router.navigate(['']);
  }
}
