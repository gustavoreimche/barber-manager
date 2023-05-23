import { Component, OnInit } from '@angular/core';
import { Cost } from '../cost.model';
import { CostService } from '../cost.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-cost-read',
  templateUrl: './cost-read.component.html',
  styleUrls: ['./cost-read.component.scss'],
})
export class CostReadComponent implements OnInit {
  costs: Cost[] = [];
  isMobile = false;

  displayedColumns = ['name', 'address', 'phone', 'action'];
  displayedColumnsMobile = ['name', 'action'];

  constructor(
    private costService: CostService,
    private breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit(): void {
    this.loadCosts();
    this.breakpointObserver
      .observe([Breakpoints.Handset])
      .subscribe((result) => {
        this.isMobile = result.matches;
      });
  }

  loadCosts(): void {
    this.costService.getAllCosts().subscribe(
      (costs: Cost[]) => {
        this.costs = costs;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
}
