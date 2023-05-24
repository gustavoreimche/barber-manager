import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';

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

  submit(): void {
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
