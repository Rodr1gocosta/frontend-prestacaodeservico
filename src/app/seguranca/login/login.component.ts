import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/seguranca/login/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }

    const { username, password } = this.loginForm.value;
    this.authService.login(username, password).subscribe(response => {
      
      this.router.navigate(['']);
      this.authService.message('Login efetuado com sucesso!');
    },
      error => {
        let errorMessage = 'Ocorreu um erro ao fazer login. Por favor, tente novamente mais tarde.';

        switch (error.status) {
          case 401: {
            errorMessage = 'Credenciais inválidas. Verifique seu nome de usuário e senha.';
          } break;
          case 403: {
            errorMessage = 'Acesso negado. Você não tem permissão para acessar este recurso.';
          } break;
        }

        this.authService.message(errorMessage);
      }
    );
  }

  errorValidUsername() {
    if (this.loginForm.controls['username'].invalid && this.loginForm.controls['username'].touched) {
      return 'Nome de usuário é obrigatório!';
    }
    return false;
  }

  errorValidPassword() {
    if (this.loginForm.controls['password'].invalid && this.loginForm.controls['password'].touched) {
      return 'Senha é obrigatória!';
    }
    return false;
  }

}
