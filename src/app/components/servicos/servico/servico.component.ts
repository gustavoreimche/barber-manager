import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servico',
  templateUrl: './servico.component.html',
  styleUrls: ['./servico.component.scss'],
})
export class ServicoComponent {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateToServiceCreate(): void {
    this.router.navigate(['/service/create']);
  }
}
