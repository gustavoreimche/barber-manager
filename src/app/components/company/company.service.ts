import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Company } from './company.model';
import { HttpClient } from '@angular/common/http';
import { api } from 'src/api';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Address } from './address.model';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  url = api.url + 'companys';
  address: Address = {
    logradouro: '',
    bairro: '',
    cep: '',
    numero: null,
  };
  isEdit = false;
  isDelete = false;
  company: Company = {
    name: '',
    address: '',
    phone: '',
  };
  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }

  //

  load(): Observable<Company[]> {
    return this.http.get<Company[]>(this.url);
  }

  create(company: Company): Observable<Company> {
    return this.http.post<Company>(this.url, company);
  }

  update(company: Company): Observable<Company> {
    return this.http.put<Company>(`${this.url}/${company.id}`, company);
  }

  getById(id: string): Observable<Company> {
    return this.http.get<Company>(`${this.url}/${id}`);
  }

  delete(id: string): Observable<Company> {
    return this.http.delete<Company>(`${this.url}/${id}`);
  }

  getAddressByCEP(cep: string): Observable<Address> {
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    return this.http.get<Address>(url);
  }

  formatPhoneNumber(phone: string): string {
    return `${phone.slice(0, 2)}-${phone.slice(2, 7)}-${phone.slice(7)}`;
  }
}
