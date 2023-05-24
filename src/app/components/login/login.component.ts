import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { ReloadNavService } from 'src/app/services/reloadNav.service';

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
    private reloadNavService: ReloadNavService
  ) {}

  ngOnInit() {}

  onSubmit() {
    this.userService
      .login(this.user.email, this.user.password)
      .subscribe((data) => {
        console.log(data.length);
        if (data.length > 0) {
          localStorage.setItem('token', 'eadsef32');
          this.reloadNavService.update();
          this.router.navigateByUrl('/');
        }
      });
  }
}
