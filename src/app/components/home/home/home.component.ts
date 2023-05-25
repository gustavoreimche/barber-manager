import { Company } from './../../company/company.model';
import { Component, OnInit } from '@angular/core';
import { UserService } from './../../../services/user.service';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './../../../models/user.model';
import { CompanyService } from '../../company/company.service';
import { Router } from '@angular/router';
import { ReloadNavService } from 'src/app/services/reloadNav.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  companies: Company[] = [];
  selectedCompany: Company | null = null;

  constructor(private userService: UserService,
    private companyService:CompanyService,  private reloadNavService: ReloadNavService,
    private router: Router)
    {}

  ngOnInit() {
    this.updateUser();
    // this.loadUserCompanies();
  }

  loadUserCompanies() {
    const userId = localStorage.getItem('idUser');
    if (userId) {
      this.userService.getById(userId).subscribe((user) => {
        // const companyIds = user.idCompanys || [];
        // const companyRequests = companyIds.map((companyId) => {
        //   return this.userService.getById(companyId).pipe(
        //     map((company) => this.mapUserToCompany(company))
        //   );
        // });

        // forkJoin(companyRequests).subscribe((companyArrays) => {
        //   this.companies = companyArrays.filter((company) => !!company);
        //   this.companies.sort((a, b) => (a.name ?? '').localeCompare(b.name ?? ''));
        //   this.selectedCompany = this.companies.length > 0 ? this.companies[0] : null;
        // });


      });
    }
  }

  selectCompany(company: Company): void {
    this.selectedCompany = company;
    console.log('Selected company:', company);
  }

  private mapUserToCompany(user: User): Company {
    const company: Company = {
      id: user.id,
      name: user.name || '', // Atribua uma string vazia se user.name for undefined
      address: user.address || '', // Atribua uma string vazia se user.address for undefined
      phone: '', // Adicione a propriedade phone aqui
    };
    return company;
  }

  updateUser() {
    const idUser = localStorage.getItem('idUser');
    this.userService.getById(idUser as string).subscribe((user) => {
      this.companies.splice(0);
      user.idCompanys?.forEach((idCompany) => {
        this.companyService.getById(idCompany).subscribe((company) => {
          this.companies.push(company);
        });
      });
    });
    this.companies.sort();
  }

  switchCompany(id: string): void {
    console.log(id);
    localStorage.setItem('idCompany', id);
    this.reloadNavService.update();
    this.router.navigate(['/']);
  }
}
