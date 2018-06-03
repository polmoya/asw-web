import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {Contribution} from '../contribution/contribution.model';
import {HttpService} from '../shared/http.service';


@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent {
  contribution: Contribution;
  ask: boolean;

  constructor(private httpService: HttpService, private router: Router) {
    this.contribution = new Contribution();
    this.ask = false;
  }

  async submit(): Promise<any> {
    try {
      const newContribution: Contribution = await this.httpService.post(this.ask ? 'asks' : 'news', this.contribution);
      this.router.navigate([`contribution/${newContribution.id}`]);
    } catch (err) {
      if (err.status === 409) {
        this.router.navigate([`contribution/${err.error.id}`]);
      }
    }
  }
}
