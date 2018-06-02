import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Contribution} from '../shared/contribution.model';
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
  logged_user: User;

  constructor(private authService: AuthService, private httpService: HttpService, private router: Router) {
    this.authService.isLogged$.subscribe(async () => {
      this.logged_user = this.authService.getCurrentUser();
    });
  }

  ngOnInit() {
    this.showVote = this.isNotVoted();
  }

  isNotVoted(): boolean {
    return this.logged_user === null ? false : !this.contribution.contribution_votes.includes(this.logged_user.email);
  }

  isMine(): boolean {
    return this.logged_user === null ? false : this.contribution.user === this.logged_user.email;
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
