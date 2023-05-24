import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CompanyComponent } from './components/company/company/company.component';
import { ServicoComponent } from './components/servicos/servico/servico.component';
import { ServicoCreateComponent } from './components/servicos/servico-create/servico-create.component';
import { ServicoUpdateComponent } from './components/servicos/servico-update/servico-update.component';
import { ServicoDeleteComponent } from './components/servicos/servico-delete/servico-delete.component';
import { CostComponent } from './components/balance/cost/cost/cost.component';
import { CostCreateComponent } from './components/balance/cost/cost-create/cost-create.component';
import { CostUpdateComponent } from './components/balance/cost/cost-update/cost-update.component';
import { CostDeleteComponent } from './components/balance/cost/cost-delete/cost-delete.component';
import { BalanceComponent } from './components/balance/balance-home/balance.component';
import { EmployeeComponent } from './components/employee/employee/employee.component';
import { EmployeeCreateComponent } from './components/employee/employee-create/employee-create.component';
import { EmployeeUpdateComponent } from './components/employee/employee-update/employee-update.component';
import { EmployeeDeleteComponent } from './components/employee/employee-delete/employee-delete.component';

const routes: Routes = [
  {
    path: 'company',
    component: CompanyComponent,
  },
  {
    path: 'service',
    component: ServicoComponent,
  },
  {
    path: 'service/create',
    component: ServicoCreateComponent,
  },
  {
    path: 'service/update/:id',
    component: ServicoUpdateComponent,
  },
  {
    path: 'service/delete/:id',
    component: ServicoDeleteComponent,
  },
  {
    path: 'balance',
    component: BalanceComponent,
  },
  {
    path: 'cost',
    component: CostComponent,
  },
  {
    path: 'cost/create',
    component: CostCreateComponent,
  },
  {
    path: 'cost/update/:id',
    component: CostUpdateComponent,
  },
  {
    path: 'cost/delete/:id',
    component: CostDeleteComponent,
  },
  {
    path: 'employee',
    component: EmployeeComponent,
  },
  {
    path: 'employee/create',
    component: EmployeeCreateComponent,
  },
  {
    path: 'employee/update/:id',
    component: EmployeeUpdateComponent,
  },
  {
    path: 'employee/delete/:id',
    component: EmployeeDeleteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
