import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './seguranca/login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  title = 'Prestação de Serviço';

  motrarMenu: boolean = false;

  constructor(private authService: AuthService) {
    this.authService.motrarMenuEmitter.subscribe(mostra => this.motrarMenu = mostra);
  }

  ngOninit() {}

  ngAfterViewInit(){}

}
