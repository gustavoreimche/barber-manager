import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { HttpClient } from '@angular/common/http';
import { api } from 'src/api';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  url = api.url + 'employees';

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }

  load(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.url);
  }

  create(Employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.url, Employee);
  }

  update(Employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.url}/${Employee.id}`, Employee);
  }

  getById(id: string): Observable<Employee> {
    return this.http.get<Employee>(`${this.url}/${id}`);
  }

  delete(id: string): Observable<Employee> {
    return this.http.delete<Employee>(`${this.url}/${id}`);
  }

  formatPhoneNumber(phone: string): string {
    return `${phone.slice(0, 2)}-${phone.slice(2, 7)}-${phone.slice(7)}`;
  }
}
