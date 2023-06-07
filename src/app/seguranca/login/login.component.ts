import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService) { }

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
        // Redireciona para outra página ou realiza ações adicionais com base na resposta recebida
        // Exemplo: this.router.navigate(['/home']);
    },
    error => {
        // Lógica de tratamento de erros
    }
    );
  }

  errorValidUsername() {
    if(this.loginForm.controls['username'].invalid && this.loginForm.controls['username'].touched) {
      return 'Nome de usuário é obrigatório!';
    }
    return false;
  }

  errorValidPassword() {
    if(this.loginForm.controls['password'].invalid && this.loginForm.controls['password'].touched) {
      return 'Senha é obrigatória!';
    }
    return false;
  }

}
