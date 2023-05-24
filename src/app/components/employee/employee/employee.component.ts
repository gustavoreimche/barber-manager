import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  constructor(private router: Router, private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employeeService.load().subscribe((employees) => {
      console.log(employees);
    });
  }
  navigateToEmployeeCreate(): void {
    this.router.navigate(['/employee/create']);
  }
  
}
