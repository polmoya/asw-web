import {Component, OnInit} from '@angular/core';
import {Contribution} from '../shared/contribution.model';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpService} from '../shared/http.service';


@Component({
  selector: 'app-details-contribution',
  templateUrl: './details_contribution.component.html',
  styleUrls: ['./details_contribution.component.css']
})
export class DetailsContributionComponent implements OnInit {

  contribution: Contribution;
  show_text: boolean;

  constructor(private httpService: HttpService, private route: ActivatedRoute) {  }

  ngOnInit() {
    this.getContribution();
    // TODO: repassar
    this.show_text = !this.contribution.url;

  }

  async getContribution(): Promise<any> {
     const contrId: String = this.route.snapshot.params.id;
    this.contribution = await this.httpService.get('contributions/' + contrId);
  }


}