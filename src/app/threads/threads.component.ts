import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {HttpService} from '../shared/http.service';
import {Comment} from '../comment/comment.model';

@Component({
  selector: 'app-threads',
  templateUrl: './threads.component.html'
})
export class ThreadsComponent implements OnInit {

  private comments: Comment[];

  constructor(private activatedRoute: ActivatedRoute, private httpService: HttpService) {
    this.comments = [];
  }

  async ngOnInit() {
    const email: String = this.activatedRoute.snapshot.params.id;
    this.comments = await this.httpService.get(`users/${email}/threads`);
  }
}
