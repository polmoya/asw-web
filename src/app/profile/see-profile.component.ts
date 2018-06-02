import {Component, OnInit} from '@angular/core';
import {User} from '../shared/user.model';
import {HttpService} from '../shared/http.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../auth/auth.service';


@Component({
  selector: 'app-see-profile',
  templateUrl: './see-profile.component.html',
  styleUrls: ['./see-profile.component.css']
})
export class SeeProfileComponent implements OnInit {

  user: User;

  constructor(private router: Router, private activatedRoute: ActivatedRoute,
              private httpService: HttpService, private authService: AuthService) {
  }

  async ngOnInit() {
    const email: String = this.activatedRoute.snapshot.params.id;
    if (this.authService.getCurrentUser() != null && email === this.authService.getCurrentUser().email) {
      this.router.navigate(['user/myProfile']);
    }
    this.user = await this.httpService.get('users/' + email);
  }

}
