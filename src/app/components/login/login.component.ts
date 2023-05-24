import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  // Método para lidar com o envio do formulário de login
  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    // Lógica de autenticação aqui (exemplo fictício)
    const username = this.loginForm.controls['username'].value;
    const password = this.loginForm.controls['password'].value;

    if (username === 'admin' && password === 'password') {
      // Login bem-sucedido, redirecionar para a página principal
      console.log('Login bem-sucedido! Redirecionando para a página principal...');
    } else {
      // Credenciais inválidas, exibir mensagem de erro
      console.log('Credenciais inválidas! Por favor, tente novamente.');
    }
  }
}
