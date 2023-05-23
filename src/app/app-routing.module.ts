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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
