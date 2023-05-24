import { NgModule } from '@angular/core';
import { NgxMaskModule } from 'ngx-mask';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { A11yModule } from '@angular/cdk/a11y';
import { BidiModule } from '@angular/cdk/bidi';
import { ObserversModule } from '@angular/cdk/observers';
import { OverlayModule } from '@angular/cdk/overlay';
import { PlatformModule } from '@angular/cdk/platform';
import { PortalModule } from '@angular/cdk/portal';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { FormsModule } from '@angular/forms';

//Angular Material Components
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatDividerModule } from '@angular/material/divider';
import { MatTreeModule } from '@angular/material/tree';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { NavService } from './components/template/nav/nav.service';
import { CompanyComponent } from './components/company/company/company.component';
import { CompanyCreateComponent } from './components/company/company-create/company-create.component';

import { HttpClientModule } from '@angular/common/http';
import { CompanyReadComponent } from './components/company/company-read/company-read.component';
import { CompanyUpdateComponent } from './components/company/company-update/company-update.component';
import { CompanyDeleteComponent } from './components/company/company-delete/company-delete.component';
import { ServicoComponent } from './components/servicos/servico/servico.component';
import { ServicoCreateComponent } from './components/servicos/servico-create/servico-create.component';
import { ServicoUpdateComponent } from './components/servicos/servico-update/servico-update.component';
import { ServicoDeleteComponent } from './components/servicos/servico-delete/servico-delete.component';
import { ServicoReadComponent } from './components/servicos/servico-read/servico-read.component';

import { MatNativeDateModule } from '@angular/material/core';
import { ClientComponent } from './components/client/client-home/client.component';
import { ClientReadComponent } from './components/client/client-read/client-read.component';
import { ClientCreateComponent } from './components/client/client-create/client-create.component';
import { ClientUpdateComponent } from './components/client/client-update/client-update.component';
import { ClientDeleteComponent } from './components/client/client-delete/client-delete.component';
import { CostDeleteComponent } from './components/balance/cost/cost-delete/cost-delete.component';
import { CostUpdateComponent } from './components/balance/cost/cost-update/cost-update.component';
import { CostReadComponent } from './components/balance/cost/cost-read/cost-read.component';
import { CostCreateComponent } from './components/balance/cost/cost-create/cost-create.component';
import { CostComponent } from './components/balance/cost/cost/cost.component';
import { BalanceComponent } from './components/balance/balance-home/balance.component';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { LOCALE_ID } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

registerLocaleData(localePt);
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    CompanyComponent,
    CompanyCreateComponent,
    CompanyReadComponent,
    CompanyUpdateComponent,
    CompanyDeleteComponent,
    ServicoComponent,
    ServicoCreateComponent,
    ServicoUpdateComponent,
    ServicoDeleteComponent,
    ServicoReadComponent,
    CostReadComponent,
    CostCreateComponent,
    CostDeleteComponent,
    CostUpdateComponent,
    CostComponent,
    ClientComponent,
    ClientReadComponent,
    ClientCreateComponent,
    ClientUpdateComponent,
    ClientDeleteComponent,
    BalanceComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    A11yModule,
    BidiModule,
    ObserversModule,
    OverlayModule,
    PlatformModule,
    PortalModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    NgxMaskModule.forRoot(),
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    // Material
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
  ],
  providers: [NavService, { provide: LOCALE_ID, useValue: 'pt-BR' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
