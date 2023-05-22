import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <app-footer></app-footer>
    <app-nav></app-nav>
  `,
})
export class AppComponent {
  title = 'barber-manager';
}
