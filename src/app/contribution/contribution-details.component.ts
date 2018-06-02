import {Component, OnInit} from '@angular/core';
import {Contribution} from '../shared/contribution.model';
import {ActivatedRoute} from '@angular/router';
import {HttpService} from '../shared/http.service';


@Component({
  selector: 'app-details-contribution',
  templateUrl: './contribution-details.component.html',
  styleUrls: ['./contribution-details.component.css']
})
export class ContributionDetailsComponent implements OnInit {

  contribution: Contribution;
  show_text: boolean;

  constructor(private httpService: HttpService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getContribution();
  }

  async getContribution(): Promise<any> {
    const contrId: String = this.route.snapshot.params.id;
    this.contribution = await this.httpService.get('contributions/' + contrId);
    this.show_text = await this.contribution.kind === 'ask';
  }


}