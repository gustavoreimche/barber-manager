import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.scss'],
})
export class EmployeeCreateComponent {
  hide = false;
  constructor(private router: Router, private userService: UserService) {}

  user: User = {
    name: '',
    email: '',
    phone: '',
    password: '',
    admin: false,
    employee: false,
    idCompanys: [],
  };

  emailControl = new FormControl('', [Validators.required, Validators.email]);

  submit(): void {
    this.user.password = this.user.email;
    this.user.phone = this.userService.formatPhoneNumber(
      this.user.phone as string
    );
    this.userService.create(this.user).subscribe((employee) => {
      this.userService.showMessage(
        `Funcionário: ${employee.name} criado com sucesso!`
      );
    });
    this.router.navigate(['/employee']);
  }

  cancel(): void {
    this.router.navigate(['/employee']);
  }
}
