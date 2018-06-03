import {Component, OnInit} from '@angular/core';
import {Contribution} from './contribution.model';
import {ActivatedRoute} from '@angular/router';
import {HttpService} from '../shared/http.service';


@Component({
  selector: 'app-details-contribution',
  templateUrl: './contribution-details.component.html',
  styleUrls: ['./contribution-details.component.css']
})
export class ContributionDetailsComponent implements OnInit {

  contribution: Contribution;
  show_text: boolean;
  comment: Comment;

  constructor(private httpService: HttpService, private router: ActivatedRoute) {
    this.comment = new Comment();
  }

  ngOnInit() {
    this.getContribution();
  }

  async getContribution(): Promise<any> {
    const contrId: String = this.router.snapshot.params.id;
    this.contribution = await this.httpService.get('contributions/' + contrId);
    this.show_text = await this.contribution.kind === 'ask';
  }

  async newComment(): Promise<any> {
    const newComment = await this.httpService.post('contributions/' + this.contribution.id + '/comments', this.comment);
    this.contribution.comments.unshift(newComment);
    this.comment = new Comment();
  }

}
