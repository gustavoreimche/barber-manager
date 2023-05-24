import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service'; 

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.scss']
})
export class EmployeeUpdateComponent {
    constructor(
      private router: Router,
      private employeeService: EmployeeService,
      private route: ActivatedRoute
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

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.employeeService.getById(id as string).subscribe((employee) => {
      this.employee = employee;
    });
  }

  submit(): void {
    this.employeeService.update(this.employee).subscribe((employee) => {
      this.employeeService.showMessage(
        `Empresa: ${employee.name} alterada com sucesso!`
      );
    });
    this.router.navigate(['/employee']);
  }

  cancel(): void {
    this.router.navigate(['/employee']);
  }
}
