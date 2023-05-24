import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service'; 

@Component({
  selector: 'app-employee-delete',
  templateUrl: './employee-delete.component.html',
  styleUrls: ['./employee-delete.component.scss']
})
export class EmployeeDeleteComponent {
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

  delete(): void {
    this.employeeService
      .delete(this.employee.id as string)
      .subscribe((employee) => {
        this.employeeService.showMessage('Empresa excluida!');
      });
    this.router.navigate(['/employee']);
  }

  cancel(): void {
    this.router.navigate(['/employee']);
  }
}
