import {Component, Input, OnInit} from '@angular/core';
import {Contribution} from '../shared/contribution.model';
import {Router} from '@angular/router';
import {HttpService} from '../shared/http.service';
import {User} from '../shared/user.model';
import {AuthService} from '../auth/auth.service';


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
  logged_user: User;

  constructor(private authService: AuthService, private httpService: HttpService, private router: Router) {
    this.logged_user = this.authService.getCurrentUser();
  }

  ngOnInit() {
    this.show_url = !this.contribution.text;
    this.show_vote = this.isNotVoted();
    this.logged = this.canVote();
  }

  isNotVoted(): boolean {
    if (this.logged_user === null) {
      return false;
    }
    const votes = this.contribution.contribution_votes;
    return !votes.includes(this.logged_user.email);
  }

  canVote(): boolean {
    if (this.logged_user === null) {
      return false;
    }
    return !(this.contribution.user === this.logged_user.email);
  }


  vote(): void {
    this.httpService.post(`contributions/${this.contribution.id}/vote`, null);
  }

  unvote(): void {
    this.httpService.delete(`contributions/${this.contribution.id}/vote`);
  }

  // TODO: obrir link en una pestanya nova refresh al votar

}
