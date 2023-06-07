import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    const url = this.baseUrl + "/api/authenticate";
    return this.http.post<any>(url, { username, password }).pipe(
      map((response: any) => {
        const token = response.token;
        this.saveToken(token);
        return response;
      }),
      catchError(error => {
        // Lida com erros de autenticação
        console.log(error);

        // let errorMessage = 'Ocorreu um erro ao fazer login. Por favor, tente novamente mais tarde.';

        // if (error.status === 401) {
        //   errorMessage = 'Credenciais inválidas. Verifique seu nome de usuário e senha.';
        // } else if (error.status === 403) {
        //   errorMessage = 'Acesso negado. Você não tem permissão para acessar este recurso.';
        // }
        
        return throwError(() => error);
      })
    );
  }

  private saveToken(token: string) {
    localStorage.setItem('token', token);
  }
}
