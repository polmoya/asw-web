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

  constructor(private httpService: HttpService, private router: Router, private route: ActivatedRoute) {
    this.reply = new Comment();
  }

  ngOnInit() {
  }

  async doReply(): Promise<any> {
    const parentId: String = this.route.snapshot.params.id;
    await this.httpService.post('comments/' + parentId + '/replies', this.reply);
    this.router.navigate(['']);
    this.reply = new Comment();
  }
}
