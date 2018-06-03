import {Component, OnInit} from '@angular/core';
import {Contribution} from './contribution.model';
import {Router} from '@angular/router';
import {HttpService} from '../shared/http.service';


@Component({
  selector: 'app-asks-list',
  templateUrl: './contributions_list.component.html',
  styleUrls: ['./contributions_list.component.css']
})
export class AsksListComponent implements OnInit {

  contributions: Contribution[];

  constructor(private httpService: HttpService, private router: Router) {
  }

  ngOnInit() {
    this.getAsks();
  }

  async getAsks(): Promise<any> {
    this.contributions = await this.httpService.get('asks');
  }

}
