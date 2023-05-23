import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from '../company.service';
import { Company } from '../company.model';

@Component({
  selector: 'app-company-update',
  templateUrl: './company-update.component.html',
  styleUrls: ['./company-update.component.scss'],
})
export class CompanyUpdateComponent {
  constructor(
    private router: Router,
    private companyService: CompanyService,
    private route: ActivatedRoute
  ) {}

  company: Company = {
    name: '',
    address: '',
    phone: null,
  };

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.companyService.getById(id as string).subscribe((company) => {
      this.company = company;
    });
  }

  submit(): void {
    this.companyService.update(this.company).subscribe((company) => {
      this.companyService.showMessage(
        `Empresa: ${company.name} alterada com sucesso!`
      );
    });
    this.router.navigate(['/company']);
  }

  cancel(): void {
    this.router.navigate(['/company']);
  }
}
