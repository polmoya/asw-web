import {Component} from '@angular/core';
import {Contribution} from '../shared/contribution.model';
import {HttpService} from '../shared/http.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent {
  contribution: Contribution;

  constructor(private httpService: HttpService, private router: Router) {
    this.contribution = new Contribution();
  }

  async submit(): Promise<any> {
    await this.httpService.post('asks', this.contribution);
    this.router.navigate(['']);
  }
}
