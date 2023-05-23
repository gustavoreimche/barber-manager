import { Cost } from './../cost.model';
import { CostService } from './../cost.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cost',
  templateUrl: './cost.component.html',
  styleUrls: ['./cost.component.scss']
})
export class CostComponent implements OnInit {
  costs: Cost[] = []; // Inicialize a propriedade costs como um array vazio

  constructor(private router: Router, private costService: CostService) {}

  ngOnInit(): void {
    this.loadCosts(); // Chame o método para carregar os custos
  }

  loadCosts(): void {
    this.costService.getAllCosts().subscribe((costs) => {
      this.costs = costs;
      console.log(this.costs);
    });
  }

  navigateToCostCreate(): void {
    this.router.navigate(['/cost/create']);
  }
}
