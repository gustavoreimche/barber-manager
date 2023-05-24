import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from '../company.service';
import { Company } from '../company.model';

@Component({
  selector: 'app-company-delete',
  templateUrl: './company-delete.component.html',
  styleUrls: ['./company-delete.component.scss'],
})
export class CompanyDeleteComponent {
  constructor(
    private router: Router,
    private companyService: CompanyService,
    private route: ActivatedRoute
  ) {}

  company: Company = {
    name: '',
    address: '',
    phone: '',
  };

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.companyService.getById(id as string).subscribe((company) => {
      this.company = company;
    });
  }

  delete(): void {
    this.companyService
      .delete(this.company.id as string)
      .subscribe((company) => {
        this.companyService.showMessage('Empresa excluida!');
      });
    this.router.navigate(['/company']);
  }

  cancel(): void {
    this.router.navigate(['/company']);
  }
}
