import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CostService } from '../cost.service';
import { Cost } from '../cost.model';

@Component({
  selector: 'app-cost-update',
  templateUrl: './cost-update.component.html',
  styleUrls: ['./cost-update.component.scss'],
})
export class CostUpdateComponent implements OnInit {
  cost: Cost = {
    name: '',
    address: '',
    phone: null,
    description: '',
  };

  constructor(
    private router: Router,
    private costService: CostService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.costService.getById(id as string).subscribe((cost: Cost) => {
      this.cost = cost;
    });
  }

  submit(): void {
    this.costService.update(this.cost).subscribe((updatedCost: Cost) => {
      this.costService.showMessage(
        `Custo: ${updatedCost.name} atualizado com sucesso!`
      );
    });
    this.router.navigate(['/cost']);
  }

  cancel(): void {
    this.router.navigate(['/cost']);
  }
}
