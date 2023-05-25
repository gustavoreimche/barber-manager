import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <app-footer></app-footer>
    <app-nav></app-nav>
  `,
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {
    localStorage.setItem('isAdmin', 'false');
    // localStorage.setItem('idCompany', 'pCKbltP');
  }
}
