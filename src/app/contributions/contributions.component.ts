import {Component} from '@angular/core';
import {Contribution} from '../shared/contribution.model';
import {Router} from '@angular/router';
import {HttpService} from '../shared/http.service';


@Component({
  selector: 'app-contributions',
  templateUrl: './contributions.component.html',
  styleUrls: ['./contributions.component.css']
})
export class ContributionsComponent {

  contributions: Contribution[];

  constructor(private httpService: HttpService, private router: Router) {

    this.contributions = [
      { id: 1, title: 'Mr. Nice', url: '', text: '', time: '', n_comments: 0, n_votes: 0, kind: '', user: '' },
      { id: 2, title: 'Narco', url: '', text: '', time: '', n_comments: 0, n_votes: 0, kind: '', user: ''  },
      { id: 3, title: 'Bombasto', url: '', text: '', time: '', n_comments: 0, n_votes: 0, kind: '', user: ''  },
    ];
  }

}
