import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map, Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl: String = environment.baseUrl;

  private isLoggedIn = false;
  motrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private http: HttpClient,
              private snack: MatSnackBar,
              ) { }

  login(username: string, password: string): Observable<any> {
    const url = this.baseUrl + "/api/authenticate";
    
    return this.http.post<any>(url, { username, password }).pipe(
      map((response: any) => {
        this.saveToken(response.id_token);
        this.isLoggedIn = true;
        this.motrarMenuEmitter.emit(true);
      })
    );
  }

  logout() {
      localStorage.clear();
      this.isLoggedIn = false;
      this.motrarMenuEmitter.emit(false);
  }

  private saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  isAuthenticated(): boolean {
    // Verifica se o usuário está logado
    return this.isLoggedIn;
  }

  message(msg: String) {
    this.snack.open(`${msg}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 4000
    })
  }
}
