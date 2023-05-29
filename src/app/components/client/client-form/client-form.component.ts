import { Component } from '@angular/core';
import { Client } from '../client.model';
import { FormControl } from '@angular/forms';
import { CepService } from 'src/app/services/cep.service';
import { ReloadService } from 'src/app/services/reload.service';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss'],
})
export class ClientFormComponent {
  constructor(
    private cepService: CepService,
    private reloadService: ReloadService,
    public clientService: ClientService
  ) {}

  client: Client = {
    name: '',
    phone: '',
    idCompany: localStorage.getItem('idCompany') as string,
  };

  cepControl = new FormControl();
  cep: string = '';
  logradouro: string = '';
  bairro: string = '';
  city: string = '';
  numero: number | null = null;

  ngOnInit() {
    this.cepControl.valueChanges.subscribe((cep) => {
      if (cep && cep.length === 8) {
        // Verifica se o CEP possui 8 dígitos
        this.cepService.getAddressByCEP(cep).subscribe((data) => {
          this.logradouro = data.logradouro;
          this.bairro = data.bairro;
          this.cep = data.cep;
          this.city = data.localidade;
        });
      }
    });
    this.reloadService.reloadParent$.subscribe(() => {
      this.reload();
    });
  }

  submit(): void {
    if (!this.clientService.isEdit && !this.clientService.isDelete) {
      this.client.address = `${this.logradouro}, ${this.bairro}, ${this.numero}, ${this.cep}, ${this.city}`;
      console.log(this.client.address);
      this.client.phone = this.clientService.formatPhoneNumber(
        this.client.phone as string
      );
      this.clientService.create(this.client).subscribe((client) => {
        this.clientService.showMessage(
          `Empresa: ${client.name} criada com sucesso!`
        );
      });
    } else if (this.clientService.isEdit && !this.clientService.isDelete) {
      this.clientService.update(this.client).subscribe((client) => {
        this.clientService.showMessage(
          `Cliente: ${client.name} alterada com sucesso!`
        );
      });
    } else if (this.clientService.isDelete) {
      this.clientService.delete(this.client.id as string).subscribe(() => {
        this.clientService.showMessage('Cliente excluido!');
      });
    }
  }

  cancel(): void {
    this.cep = '';
    this.logradouro = '';
    this.bairro = '';
    this.numero = null;
    this.clientService.isDelete = false;
    this.clientService.isEdit = false;
    this.clientService.client = {
      name: '',
      address: '',
      phone: '',
      debit: 0,
      num: 0,
      pg: '',
      squad: '',
    };
    this.reloadService.reloadParent();
  }

  reload(): void {
    this.client = this.clientService.client;
  }
}
