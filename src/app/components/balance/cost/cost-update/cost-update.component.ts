import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cost } from '../cost.model';
import { CostService } from '../cost.service';

@Component({
  selector: 'app-cost-update',
  templateUrl: './cost-update.component.html',
  styleUrls: ['./cost-update.component.scss']
})
export class CostUpdateComponent implements OnInit {
  cost: Cost = {
    id: '',
    idCompany: '',
    value: 0,
    description: '',
    date: new Date()
  };

  constructor(
    private costService: CostService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.costService.getById(id).subscribe((cost) => {
        this.cost = cost;
      });
    }
  }

  submit(): void {
    this.costService.update(this.cost).subscribe(() => {
      this.costService.showMessage('Custo atualizado com sucesso!');
      this.router.navigate(['/cost']);
    });
  }

  cancel(): void {
    this.router.navigate(['/cost']);
  }
}
