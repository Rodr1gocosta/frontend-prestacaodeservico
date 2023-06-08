import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../login/auth.service";

@Injectable({
    providedIn: 'root'
  })
export class AuthGuardService implements CanActivate {

    constructor(private authService: AuthService, 
                private router: Router) {}
  
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      if (this.authService.isAuthenticated()) {
        return true; // Permite o acesso à rota
      } else {
        this.router.navigate(['/login']); // Redireciona para a página de login
        return false; // Bloqueia o acesso à rota
      }
    }
  }