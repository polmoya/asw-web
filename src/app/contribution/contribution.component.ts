import {Component, Input, OnInit} from '@angular/core';
import {Contribution} from '../shared/contribution.model';
import {Router} from '@angular/router';
import {HttpService} from '../shared/http.service';


@Component({
  selector: 'app-contribution',
  templateUrl: './contribution.component.html',
  styleUrls: ['./contribution.component.css']
})
export class ContributionComponent implements OnInit {

  @Input() contribution: Contribution;
  show_url: boolean;
  show_vote: boolean;
  logged: boolean;

  constructor(private httpService: HttpService, private router: Router) {
  }

  ngOnInit() {
    this.show_url = !this.contribution.text;
    this.show_vote = this.isVoted();
    this.logged = this.canVote();
  }

  isVoted(): boolean {
    const votes = this.contribution.contribution_votes;
    // TODO: esperar a que funcioni el login
    // const isVoted = !(votes.includes(authenticatedUser));
    const isVoted = false;
    return isVoted;
  }

  canVote(): boolean {
    const votes = this.contribution.contribution_votes;
    // TODO: esperar a que funcioni el login
    // const canVote = !(this.contribution.user === authenticatedUser);
    const canVote = true;
    return canVote;
  }


  vote(): void {
    this.httpService.post(`contributions/${this.contribution.id}/vote`, null);
  }

  unvote(): void {
    this.httpService.delete(`contributions/${this.contribution.id}/vote`);
  }

}
