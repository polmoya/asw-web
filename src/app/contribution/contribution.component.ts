import {Component, Input} from '@angular/core';
import {Contribution} from '../shared/contribution.model';
import {Router} from '@angular/router';
import {HttpService} from '../shared/http.service';


@Component({
  selector: 'app-contribution',
  templateUrl: './contribution.component.html',
  styleUrls: []
})
export class ContributionComponent {

  @Input() contribution: Contribution;

  constructor(private httpService: HttpService, private router: Router) {
  }
}