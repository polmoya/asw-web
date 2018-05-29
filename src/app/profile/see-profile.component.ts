import {Component, OnInit} from '@angular/core';
import {User} from '../shared/user.model';
import {HttpService} from '../shared/http.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-see-profile',
  templateUrl: './see-profile.component.html',
  styleUrls: ['./see-profile.component.css']
})
export class SeeProfileComponent implements OnInit {

  user: User;

  constructor(private route: ActivatedRoute, private httpService: HttpService) {
  }

  async ngOnInit() {
    const userId: String = this.route.snapshot.params.id;
    this.user = await this.httpService.get('users/' + userId);
  }

}
