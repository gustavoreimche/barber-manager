import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cost } from '../cost.model';
import { CostService } from '../cost.service';

@Component({
  selector: 'app-cost-create',
  templateUrl: './cost-create.component.html',
  styleUrls: ['./cost-create.component.scss']
})
export class CostCreateComponent {
  constructor(private router: Router, private costService: CostService) {}

  cost: Cost = {
    id: '',
    idCompany: '',
    value: 0,
    description: '',
    date: new Date(),
  };

  submit(): void {
    this.costService.create(this.cost).subscribe((cost) => {
      this.costService.showMessage(`Custo: ${cost.description} criado com sucesso!`);
    });
    this.router.navigate(['/cost']);
  }

  cancel(): void {
    this.router.navigate(['/cost']);
  }
}
