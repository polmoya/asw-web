import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {Contribution} from '../shared/contribution.model';
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
    await this.httpService.post(this.ask ? 'asks' : 'news', this.contribution);
    this.router.navigate(['news']);
  }
}
