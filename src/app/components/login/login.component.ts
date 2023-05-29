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
    this.userService
      .login(this.user.email, this.user.password as string)
      .subscribe((data) => {
        if (data[0].id) {
          this.authService.setToken('123abc');
          localStorage.setItem('idUser', data[0].id as string);
          this.reloadNavService.update();
          this.router.navigateByUrl('/');
        }
      });

    // const isLogged = this.authService.login(
    //   this.user.name as string,
    //   this.user.password as string
    // );

    // if (isLogged) {
    //   this.reloadNavService.update();
    //   this.router.navigateByUrl('/');
    // }
  }
}
