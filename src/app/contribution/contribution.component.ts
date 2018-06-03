import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Contribution} from './contribution.model';
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
  @Input() showDelete: boolean;
  showVote: boolean;
  loggedUser: User;

  constructor(private authService: AuthService, private httpService: HttpService, private router: Router) {
    this.authService.isLogged$.subscribe(async () => {
      this.loggedUser = this.authService.getCurrentUser();
    });
  }

  ngOnInit() {
    this.showVote = this.isNotVoted();
  }

  isNotVoted(): boolean {
    return this.loggedUser === null ? false : !this.contribution.contribution_votes.includes(this.loggedUser.email);
  }

  isMine(): boolean {
    return this.loggedUser === null ? false : this.contribution.user === this.loggedUser.email;
  }


  async vote() {
    await this.httpService.post(`contributions/${this.contribution.id}/vote`, null);
    this.contribution.n_votes += 1;
    this.showVote = false;
  }

  async unvote() {
    await this.httpService.delete(`contributions/${this.contribution.id}/vote`);
    this.contribution.n_votes -= 1;
    this.showVote = true;
  }

  async deleteContribution() {
    await this.httpService.delete(`contributions/${this.contribution.id}`);
    this.router.navigate(['']);
  }
}
