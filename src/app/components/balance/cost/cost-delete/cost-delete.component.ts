import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CostService } from '../cost.service';
import { Cost } from '../cost.model';

@Component({
  selector: 'app-cost-delete',
  templateUrl: './cost-delete.component.html',
  styleUrls: ['./cost-delete.component.scss'],
})
export class CostDeleteComponent implements OnInit {
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

  delete(): void {
    this.costService.delete(this.cost.id as string).subscribe(() => {
      this.costService.showMessage('Custo excluído!');
    });
    this.router.navigate(['/cost']);
  }

  cancel(): void {
    this.router.navigate(['/cost']);
  }
}
