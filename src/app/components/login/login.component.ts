import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { ReloadNavService } from 'src/app/services/reloadNav.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user: User = {
    email: '',
    password: '',
  };
  hide = true;

  constructor(
    private userService: UserService,
    private router: Router,
    private reloadNavService: ReloadNavService,
    private authService: AuthService
  ) {}

  ngOnInit() {}

  onSubmit() {
    this.authService
      .login(this.user.email, this.user.password as string)
      .subscribe((isLogged) => {
        if (isLogged) {
          this.userService.showMessage(`Welcome`);
          localStorage.setItem('idCompany', '64761541f5e4d91bab04f5eb');
          this.reloadNavService.update();
          this.router.navigateByUrl('/');
        }
      });
  }
}
