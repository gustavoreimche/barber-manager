import { Component, OnInit } from '@angular/core';
import { Company } from '../company.model';
import { CompanyService } from '../company.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-company-read',
  templateUrl: './company-read.component.html',
  styleUrls: ['./company-read.component.scss'],
})
export class CompanyReadComponent implements OnInit {
  companys: Company[] = [];
  isMobile = false;

  displayedColumns = ['name', 'address', 'phone', 'action'];
  displayedColumnsMobile = ['name', 'action'];

  constructor(
    private companyService: CompanyService,
    private breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit(): void {
    this.companyService.load().subscribe((compays) => {
      this.companys = compays;
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
