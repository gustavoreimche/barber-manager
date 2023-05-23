import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent {
  constructor(private router: Router) {}

  navigateToServiceCreate(): void {
    this.router.navigate(['/services/create']);
  }
}
