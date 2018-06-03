import {Component} from '@angular/core';
import {User} from '../shared/user.model';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  user: User;

  constructor(private authService: AuthService) {
    this.authService.isLogged$.subscribe(async () => {
      this.user = this.authService.getCurrentUser();
    });
  }

}
