import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Company } from './company.model';
import { HttpClient } from '@angular/common/http';
import { api } from 'src/api';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  url = api.url + 'companys';

  constructor(private http: HttpClient) {}

  loadCompanys(): Observable<Company[]> {
    return this.http.get<Company[]>(this.url);
  }

  createCompany(company: Company): Observable<Company> {
    return this.http.post<Company>(this.url, company);
  }
}
