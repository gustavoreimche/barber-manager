import { Component } from '@angular/core';
import { ServicoService } from '../servico.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Servico } from '../servico.model';

@Component({
  selector: 'app-servico-read',
  templateUrl: './servico-read.component.html',
  styleUrls: ['./servico-read.component.scss'],
})
export class ServicoReadComponent {
  servicos: Servico[] = [];
  isMobile = false;

  displayedColumns = ['name', 'address', 'phone', 'action'];
  displayedColumnsMobile = ['name', 'action'];

  constructor(
    private servicoService: ServicoService,
    private breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit(): void {
    this.servicoService.load().subscribe((servicos) => {
      this.servicos = servicos;
      console.log(servicos);
    });
    this.breakpointObserver
      .observe([Breakpoints.Handset])
      .subscribe((result) => {
        this.isMobile = result.matches;
      });
  }
}
