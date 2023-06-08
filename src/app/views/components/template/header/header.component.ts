import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/seguranca/login/auth.service';
import { DrawerService } from 'src/app/services/drawer.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private drawerService: DrawerService,
              private authService: AuthService,
              private router: Router
              ) { }

  ngOnInit(): void {
  }

  toggleDrawer(): void {
    const currentState = this.drawerService.getDrawerState();
    this.drawerService.setDrawerState(!currentState);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
