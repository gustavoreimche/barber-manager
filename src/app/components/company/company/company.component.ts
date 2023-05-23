import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss'],
})
export class CompanyComponent implements OnInit {
  constructor(private router: Router, private companyService: CompanyService) {}

  ngOnInit(): void {
    this.companyService.loadCompanys().subscribe((companys) => {
      console.log(companys);
    });
  }
  navigateToCompanyCreate(): void {
    this.router.navigate(['/company/create']);
  }
}
