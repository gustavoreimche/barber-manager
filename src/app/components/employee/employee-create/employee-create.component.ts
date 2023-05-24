import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.scss'],
})
export class EmployeeCreateComponent {
  hide = false;
  constructor(
    private router: Router,
    private employeeService: EmployeeService
  ) {}

  employee: Employee = {
    name: '',
    email: '',
    phone: '',
    password: '',
    admin: false,
    employee: false,
    companys: '',
  };

  emailControl = new FormControl('', [Validators.required, Validators.email]);

  submit(): void {
    this.employee.password = this.employee.email;
    this.employee.phone = this.employeeService.formatPhoneNumber(
      this.employee.phone
    );
    this.employeeService.create(this.employee).subscribe((employee) => {
      this.employeeService.showMessage(
        `Funcionário: ${employee.name} criado com sucesso!`
      );
    });
    this.router.navigate(['/employee']);
  }

  cancel(): void {
    this.router.navigate(['/employee']);
  }
}
