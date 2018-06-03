import {Component, OnInit} from '@angular/core';
import {Comment} from '../shared/comment.model';
import {HttpService} from '../shared/http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Contribution} from '../shared/contribution.model';

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.css']
})

export class ReplyComponent implements OnInit {
  reply: Comment;
  parent_comment: Comment;
  contribution: Contribution;

  constructor(private httpService: HttpService, private router: Router, private route: ActivatedRoute) {
    this.reply = new Comment();
    this.parent_comment = new Comment();
    this.parent_comment.text = '(Mostrar el títol al comment al que fem el reply)';
    this.contribution = new Contribution();
  }

  ngOnInit() {
    this.getInfo();
  }

  async getInfo(): Promise<any> {
    const id: String = this.route.snapshot.params.id;
    this.contribution = await this.httpService.get('contributions/' + id);
  }

  async doReply(): Promise<any> {
    await this.httpService.post('asks', this.reply);
    this.router.navigate(['']);
  }
}
