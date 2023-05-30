import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <app-nav></app-nav>
    <app-footer></app-footer>
  `,
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {
    localStorage.setItem('isAdmin', 'true');
    // localStorage.setItem('idCompany', 'pCKbltP');
  }
}
