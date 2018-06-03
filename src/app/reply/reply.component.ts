import {Component, OnInit} from '@angular/core';
import {Comment} from '../comment/comment.model';
import {HttpService} from '../shared/http.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.css']
})

export class ReplyComponent implements OnInit {
  reply: Comment;
  comment: Comment;

  constructor(private httpService: HttpService, private router: Router, private route: ActivatedRoute) {
    this.reply = new Comment();
  }

   ngOnInit() {
    this.getComment();
  }

  private async getComment() {
    const commentId: String = this.route.snapshot.params.id;
    this.comment = await this.httpService.get('comments/' + commentId);
  }

  async doReply(): Promise<any> {
    await this.httpService.post('comments/' + this.comment.id + '/replies', this.reply);
    this.router.navigate(['contribution/' + this.comment.contribution_id]);
    this.reply = new Comment();
  }
}
