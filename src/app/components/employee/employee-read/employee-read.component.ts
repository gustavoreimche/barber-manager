import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user.model';
@Component({
  selector: 'app-employee-read',
  templateUrl: './employee-read.component.html',
  styleUrls: ['./employee-read.component.scss'],
})
export class EmployeeReadComponent {
  employees: User[] = [];
  isMobile = false;

  displayedColumns = ['name', 'email', 'phone', 'action'];
  displayedColumnsMobile = ['name', 'action'];

  constructor(
    private userService: UserService,
    private breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit(): void {
    this.userService
      .getByIdCompany(localStorage.getItem('idCompany') as string)
      .subscribe((compays) => {
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
