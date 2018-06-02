import {Component, OnInit} from '@angular/core';
import {User} from '../shared/user.model';
import {HttpService} from '../shared/http.service';
import {ActivatedRoute} from '@angular/router';
import {AuthService} from '../auth/auth.service';


@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  user: User;

  constructor(private authService: AuthService, private httpService: HttpService) {
    this.user = this.authService.getCurrentUser();
  }

  async ngOnInit() {
    this.user = await this.httpService.get(`users/${this.user.email}`);
  }

  updateUser() {
    this.httpService.put(`users/${this.user.email}`, this.user);
  }
}
