import { Component } from '@angular/core';
import { Servico } from '../servico.model';
import { ServicoService } from '../servico.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servico-create',
  templateUrl: './servico-create.component.html',
  styleUrls: ['./servico-create.component.scss'],
})
export class ServicoCreateComponent {
  constructor(private router: Router, private servicoService: ServicoService) {}

  servico: Servico = {
    name: '',
    description: '',
    price: null,
  };

  submit(): void {
    this.servicoService.create(this.servico).subscribe((servico) => {
      this.servicoService.showMessage(
        `Serviço: ${servico.name} criada com sucesso!`
      );
    });
    this.router.navigate(['/service']);
  }

  cancel(): void {
    this.router.navigate(['/service']);
  }
}
