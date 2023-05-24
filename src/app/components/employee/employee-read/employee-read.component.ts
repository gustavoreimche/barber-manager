import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-read',
  templateUrl: './employee-read.component.html',
  styleUrls: ['./employee-read.component.scss']
})
export class EmployeeReadComponent {

  employees: Employee[] = [];
  isMobile = false;

  displayedColumns = ['name', 'email', 'phone', 'action'];
  displayedColumnsMobile = ['name', 'action'];

  constructor(
    private employeeService: EmployeeService,
    private breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit(): void {
    this.employeeService.load().subscribe((compays) => {
      this.employees = compays;
    });
    this.breakpointObserver
      .observe([Breakpoints.Handset])
      .subscribe((result) => {
        this.isMobile = result.matches;
      });
  }
  
  formatPhoneNumber(phone: string): string {
    const phoneNumber = phone || '';
    return phoneNumber.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  }
}
