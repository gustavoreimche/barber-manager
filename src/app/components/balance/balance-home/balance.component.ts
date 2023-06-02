import { Component, OnInit } from '@angular/core';
import { Servico } from '../../servicos/servico.model';
import { ServicoService } from '../../servicos/servico.service';
import { BalanceService } from '../balance.service';
import { ReloadService } from 'src/app/services/reload.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss'],
})
export class BalanceComponent implements OnInit {
  months = [
    { id: 0, month: 'Janeiro' },
    { id: 1, month: 'Fevereiro' },
    { id: 2, month: 'Março' },
    { id: 3, month: 'Abril' },
    { id: 4, month: 'Maio' },
    { id: 5, month: 'Junho' },
    { id: 6, month: 'Julho' },
    { id: 7, month: 'Agosto' },
    { id: 8, month: 'Setembro' },
    { id: 9, month: 'Outubro' },
    { id: 10, month: 'Novembro' },
    { id: 11, month: 'Dezembro' },
  ];

  selectedMonth: number = new Date().getMonth();

  constructor(
    public balanceService: BalanceService,
    private reloadService: ReloadService
  ) {}

  ngOnInit(): void {}

  getTotalEntradas(): number {
    return 300;
    //TODO Calcular o valor da entrada com base da tabela ServiceExecuted
  }

  getTotalDespesas(): number {
    let total = 0;
    this.balanceService.costs.forEach((cost) => {
      total += cost.value;
    });

    return total;
  }

  getTotal(): number {
    return this.getTotalEntradas() - this.getTotalDespesas();
  }

  reload(): void {
    this.reloadService.reloadParent();
  }

  previus(): void {
    if (this.balanceService.actualMonth == 0) {
      this.balanceService.actualMonth = 11;
    } else {
      this.balanceService.actualMonth = this.balanceService.actualMonth - 1;
    }
    this.reload();
  }

  next(): void {
    if (this.balanceService.actualMonth == 11) {
      this.balanceService.actualMonth = 0;
    } else {
      this.balanceService.actualMonth = this.balanceService.actualMonth + 1;
    }
    this.reload();
  }
}
