import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CostService } from '../cost.service';

@Component({
  selector: 'app-cost',
  templateUrl: './cost.component.html',
  styleUrls: ['./cost.component.scss']
})
export class CostComponent implements OnInit {
  costs: any[] = [];

  constructor(private router: Router, private costService: CostService) {}

  ngOnInit(): void {
    this.loadCosts();
  }

  loadCosts(): void {
    this.costService.getAllCosts().subscribe(
      (costs: any[]) => {
        this.costs = costs;
        console.log(costs);
      },
      (error: any) => {
        console.log('Error:', error);
      }
    );
  }

  navigateToCostCreate(): void {
    this.router.navigate(['/cost/create']);
  }
}
