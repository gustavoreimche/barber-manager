import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from './components/company/company/company.component';
import { CompanyCreateComponent } from './components/company/company-create/company-create.component';

const routes: Routes = [
  {

    path: 'company',
    component: CompanyComponent,
  },
  {
    path: 'company/create',
    component: CompanyCreateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
