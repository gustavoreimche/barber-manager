import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CompanyComponent } from './components/company/company/company.component';
import { CompanyCreateComponent } from './components/company/company-create/company-create.component';
import { CompanyUpdateComponent } from './components/company/company-update/company-update.component';
import { CompanyDeleteComponent } from './components/company/company-delete/company-delete.component';
import { ServicoComponent } from './components/servicos/servico/servico.component';
import { ServicoCreateComponent } from './components/servicos/servico-create/servico-create.component';
import { ServicoUpdateComponent } from './components/servicos/servico-update/servico-update.component';
import { ServicoDeleteComponent } from './components/servicos/servico-delete/servico-delete.component';
import { CostComponent } from './components/balance/cost/cost/cost.component';
import { CostCreateComponent } from './components/balance/cost/cost-create/cost-create.component';
import { CostUpdateComponent } from './components/balance/cost/cost-update/cost-update.component';
import { CostDeleteComponent } from './components/balance/cost/cost-delete/cost-delete.component';
import { CostReadComponent } from './components/balance/cost/cost-read/cost-read.component';
import { BalanceComponent } from './components/balance/balance-home/balance.component';

const routes: Routes = [
  {
    path: 'company',
    component: CompanyComponent,
  },
  {
    path: 'company/create',
    component: CompanyCreateComponent,
  },
  {
    path: 'company/update/:id',
    component: CompanyUpdateComponent,
  },
  {
    path: 'company/delete/:id',
    component: CompanyDeleteComponent,
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
    path: 'cost/read/:id',
    component: CostReadComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
