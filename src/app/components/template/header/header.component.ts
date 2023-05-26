import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NavService } from '../nav/nav.service';
import { UserService } from 'src/app/services/user.service';
import { ReloadNavService } from 'src/app/services/reloadNav.service';
import { CompanyService } from '../../company/company.service';
import { Company } from '../../company/company.model';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(
    private breakpointObserver: BreakpointObserver,
    private navService: NavService,
    private userService: UserService,
    private companyService: CompanyService,
    private reloadNavService: ReloadNavService,
    private router: Router
  ) {}

  ngOnInit() {
    this.updateUser();
    this.reloadNavService.update$.subscribe(() => {
      this.updateUser();
    });
    this.companyService
      .getById(localStorage.getItem('idCompany') as string)
      .subscribe((company) => {
        this.company = company;
        console.log(company);
      });
  }
  companys: Company[] = [];
  company: Company = {
    name: '',
    address: '',
    phone: '',
  };

  updateUser() {
    const idUser = localStorage.getItem('idUser');
    this.userService.getById(idUser as string).subscribe((user) => {
      this.companys.splice(0);
      user.idCompanys?.forEach((idCompany) => {
        this.companyService.getById(idCompany).subscribe((company) => {
          this.companys.push(company);
        });
      });
    });
    this.companys.sort();
    this.companyService
      .getById(localStorage.getItem('idCompany') as string)
      .subscribe((company) => {
        this.company = company;
      });
  }

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map((result) => result.matches));

  toggleMenu(): void {
    this.navService.toggleMenu();
  }

  switchCompany(id: string): void {
    console.log(id);
    localStorage.setItem('idCompany', id);
    // this.reloadNavService.update();
    location.reload();
    // this.router.navigate([this.location.path()]);
  }

  sair(): void {
    localStorage.clear();
    location.reload();
  }
}
