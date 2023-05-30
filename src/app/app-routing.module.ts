import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CompanyComponent } from './components/company/company/company.component';
import { ServicoComponent } from './components/servicos/servico/servico.component';
import { CostComponent } from './components/balance/cost/cost/cost.component';
import { BalanceComponent } from './components/balance/balance-home/balance.component';
import { EmployeeComponent } from './components/employee/employee/employee.component';
import { EmployeeCreateComponent } from './components/employee/employee-create/employee-create.component';
import { EmployeeUpdateComponent } from './components/employee/employee-update/employee-update.component';
import { EmployeeDeleteComponent } from './components/employee/employee-delete/employee-delete.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuardLogin } from './guards/auth-login.guard';
import { ClientComponent } from './components/client/client-home/client.component';
import { HomeComponent } from './components/home/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuardLogin],
  },
  {
    path: 'company',
    component: CompanyComponent,
    canActivate: [AuthGuardLogin],
  },
  {
    path: 'client',
    component: ClientComponent,
    canActivate: [AuthGuardLogin],
  },
  {
    path: 'service',
    component: ServicoComponent,
    canActivate: [AuthGuardLogin],
  },
  {
    path: 'balance',
    component: BalanceComponent,
    canActivate: [AuthGuardLogin],
  },
  {
    path: 'cost',
    component: CostComponent,
    canActivate: [AuthGuardLogin],
  },
  {
    path: 'employee',
    component: EmployeeComponent,
    canActivate: [AuthGuardLogin],
  },
  {
    path: 'employee/create',
    component: EmployeeCreateComponent,
    canActivate: [AuthGuardLogin],
  },
  {
    path: 'employee/update/:id',
    component: EmployeeUpdateComponent,
    canActivate: [AuthGuardLogin],
  },
  {
    path: 'employee/delete/:id',
    component: EmployeeDeleteComponent,
    canActivate: [AuthGuardLogin],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
