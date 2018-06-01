import {Component, Input, OnInit} from '@angular/core';
import {Contribution} from '../shared/contribution.model';
import {Router} from '@angular/router';
import {HttpService} from '../shared/http.service';
import {User} from '../shared/user.model';


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
    this.show_vote = this.isNotVoted();
    this.logged = this.canVote();
  }

  isNotVoted(): boolean {
    const votes = this.contribution.contribution_votes;
    const currentUser = this.getCurrentUser().email;
    return !votes.includes(currentUser);
  }

  canVote(): boolean {
    const currentUser = this.getCurrentUser().email;
     return !(this.contribution.user === currentUser);
  }


  vote(): void {
    this.httpService.post(`contributions/${this.contribution.id}/vote`, null);
  }

  unvote(): void {
    this.httpService.delete(`contributions/${this.contribution.id}/vote`);
  }

  getCurrentUser(): User {
    return JSON.parse(localStorage.getItem('currentUser'));
  }

  // TODO: obrir link en una pestanya nova

}
