import {Component, OnInit} from '@angular/core';
import {Contribution} from './contribution.model';
import {Router} from '@angular/router';
import {HttpService} from '../shared/http.service';


@Component({
  selector: 'app-newest-list',
  templateUrl: './contributions_list.component.html',
  styleUrls: ['./contributions_list.component.css']
})
export class NewestListComponent implements OnInit {

  contributions: Contribution[];

  constructor(private httpService: HttpService, private router: Router) {
  }

  ngOnInit() {
    this.getNewest();
  }

  async getNewest(): Promise<any> {
    this.contributions = await this.httpService.get('newest');
  }

}
