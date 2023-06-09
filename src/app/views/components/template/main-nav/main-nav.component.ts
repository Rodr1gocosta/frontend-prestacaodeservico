import { Component } from '@angular/core';
import { AuthService } from 'src/app/seguranca/login/auth.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {

  opened = false;

  constructor(public authService: AuthService) {}

  logout() {
    this.authService.logout();
  }

}
