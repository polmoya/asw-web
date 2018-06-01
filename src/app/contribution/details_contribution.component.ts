import {Component, OnInit} from '@angular/core';
import {Contribution} from '../shared/contribution.model';
import {Router} from '@angular/router';
import {HttpService} from '../shared/http.service';


@Component({
  selector: 'app-details-contribution',
  templateUrl: './details_contribution.component.html',
  styleUrls: ['./details_contribution.component.css']
})
export class DetailsContributionComponent implements OnInit {

  contribution: Contribution;
  show_text: boolean;

  constructor(private httpService: HttpService, private router: Router) {
    this.contribution = { id: 1, title: 'Mr. Nice', url: '', text: 'teeeeeeeeeeeeeeeeeeeeeeeeeeeext', time: '', n_comments: 0,
      n_votes: 0, kind: '', user: 'pepe',
      contribution_votes: [] };
  }

  ngOnInit() {
    // TODO: Descomentar al arreglar crida
    // this.getContribution();
    this.show_text = !this.contribution.url;

  }

  /* async getContribution(): Promise<any> {
    // TODO: arreglar crida
    this.contribution = await this.httpService.get('contributions/');
  }*/


}
