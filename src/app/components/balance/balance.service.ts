import { Injectable } from '@angular/core';
import { Cost } from './cost/cost.model';
import { CostService } from './cost/cost.service';

@Injectable({
  providedIn: 'root',
})
export class BalanceService {
  costs: Cost[] = [];
  actualMonth: number = new Date().getMonth();

  constructor(private costService: CostService) {
    this.costService.getAllCosts().subscribe((data) => {
      this.costs = data;
    });
  }
}
