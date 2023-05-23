import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from '../company.model';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-company-create',
  templateUrl: './company-create.component.html',
  styleUrls: ['./company-create.component.scss'],
})
export class CompanyCreateComponent {
  constructor(private router: Router, private companyService: CompanyService) {}

  company: Company = {
    name: '',
    address: '',
    phone: null,
  };

  submit(): void {
    this.companyService.createCompany(this.company).subscribe((company) => {
      console.log(company);
    });
  }

  cancel(): void {
    this.router.navigate(['/company']);
  }
}
