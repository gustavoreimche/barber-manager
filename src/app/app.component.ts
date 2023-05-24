import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <app-footer></app-footer>
    <app-nav></app-nav>
  `,
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    localStorage.setItem('isAdmin', 'true');
  }
}
