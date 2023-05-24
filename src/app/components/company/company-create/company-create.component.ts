import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from '../company.model';
import { CompanyService } from '../company.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-company-create',
  templateUrl: './company-create.component.html',
  styleUrls: ['./company-create.component.scss'],
})
export class CompanyCreateComponent {
  constructor(private router: Router, private companyService: CompanyService) {}

  ngOnInit() {
    this.cepControl.valueChanges.subscribe((cep) => {
      if (cep && cep.length === 8) {
        // Verifica se o CEP possui 8 dígitos
        this.companyService.getAddressByCEP(cep).subscribe((data) => {
          this.logradouro = data.logradouro;
          this.bairro = data.bairro;
          this.cep = data.cep;
        });
      }
    });
  }
  company: Company = {
    name: '',
    address: '',
    phone: '',
  };

  cepControl = new FormControl();
  cep: string = '';
  logradouro: string = '';
  bairro: string = '';
  numero: number = 0;

  submit(): void {
    this.company.address = `${this.logradouro}, ${this.bairro}, ${this.numero}, ${this.cep}`;
    console.log(this.company.address);
    this.company.phone = this.companyService.formatPhoneNumber(
      this.company.phone
    );
    this.companyService.create(this.company).subscribe((company) => {
      this.companyService.showMessage(
        `Empresa: ${company.name} criada com sucesso!`
      );
    });
    this.router.navigate(['/company']);
  }

  cancel(): void {
    this.router.navigate(['/company']);
  }
}
