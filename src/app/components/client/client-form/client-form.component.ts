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
    idCompany: localStorage.getItem('idCompany') ?? '',
  };

  cepControl = new FormControl();
  cep: string = '';
  logradouro: string = '';
  bairro: string = '';
  numero: number = 0;

  ngOnInit() {
    this.cepControl.valueChanges.subscribe((cep) => {
      if (cep && cep.length === 8) {
        // Verifica se o CEP possui 8 dígitos
        this.cepService.getAddressByCEP(cep).subscribe((data) => {
          this.logradouro = data.logradouro;
          this.bairro = data.bairro;
          this.cep = data.cep;
        });
      }
    });
    this.reloadService.reloadParent$.subscribe(() => {
      this.reload();
    });
  }

  submit(): void {
    // if (!this.companyService.isEdit && !this.companyService.isDelete) {
    //   this.company.address = `${this.logradouro}, ${this.bairro}, ${this.numero}, ${this.cep}`;
    //   console.log(this.company.address);
    //   this.company.phone = this.companyService.formatPhoneNumber(
    //     this.company.phone
    //   );
    //   this.companyService.create(this.company).subscribe((company) => {
    //     this.companyService.showMessage(
    //       `Empresa: ${company.name} criada com sucesso!`
    //     );
    //   });
    // } else if (this.companyService.isEdit && !this.companyService.isDelete) {
    //   this.companyService.update(this.company).subscribe((company) => {
    //     this.companyService.showMessage(
    //       `Empresa: ${company.name} alterada com sucesso!`
    //     );
    //   });
    // } else if (this.companyService.isDelete) {
    //   this.companyService
    //     .delete(this.company.id as string)
    //     .subscribe((company) => {
    //       this.companyService.showMessage('Empresa excluida!');
    //     });
    // }
    console.log(this.client);
  }

  cancel(): void {
    this.cep = '';
    this.logradouro = '';
    this.bairro = '';
    this.numero = 0;
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
