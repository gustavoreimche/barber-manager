import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { NavService } from './nav.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  isSidenavOpen: boolean;
  isSubitemOpen: boolean = false;
  isMobile: boolean = false;
  isAdmin: boolean = false;

  constructor(
    private navService: NavService,
    private breakpointObserver: BreakpointObserver
  ) {
    this.isSidenavOpen = !this.breakpointObserver.isMatched(
      Breakpoints.Handset
    );

    this.breakpointObserver.observe(Breakpoints.Handset).subscribe((result) => {
      if (result.matches) {
        this.isSidenavOpen = false; // Fecha a sidenav quando muda para dispositivo móvel
      } else {
        this.isSidenavOpen = true; // Abre a sidenav quando muda para dispositivo não móvel
      }
    });

    this.navService.menuToggled.subscribe(() => {
      this.isSidenavOpen = !this.isSidenavOpen;
    });
  }
  ngOnInit(): void {
    this.breakpointObserver.observe(Breakpoints.Handset).subscribe((result) => {
      this.isMobile = result.matches;
    });
    this.isAdmin = localStorage.getItem('isAdmin') === 'true' ? true : false;
  }
  toggleSubitem(): void {
    this.isSubitemOpen = !this.isSubitemOpen;
  }
  closeNavSide(): void {
    this.isSidenavOpen = false;
  }
}
