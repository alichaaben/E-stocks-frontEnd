import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AdminTemplateModule } from './admin-template/admin-template.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LoginComponent } from './UI/login/login.component';
import { RoSystemComponent } from './UI/ro-system/ro-system.component';
import { SettingComponent } from './UI/setting/setting.component';
import { ListUsersComponent } from './UI/users/list-users/list-users.component';
import { UpdateUsersComponent } from './UI/users/update-users/update-users.component';
import { CreateUsersComponent } from './UI/users/create-users/create-users.component';
import { ErrorPageComponent } from './UI/error-page/error-page.component';
import { CreateRoleComponent } from './UI/roles/create-role/create-role.component';
import { UpdateRoleComponent } from './UI/roles/update-role/update-role.component';
import { ListRoleComponent } from './UI/roles/list-role/list-role.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ListStockComponent } from './UI/stocks/list-stock/list-stock.component';
import { CreateStockComponent } from './UI/stocks/create-stock/create-stock.component';
import { UpdateStockComponent } from './UI/stocks/update-stock/update-stock.component';
import { ListStockEntriesComponent } from './UI/stocks/list-stock-entries/list-stock-entries.component';
import { ListStockTakenOutComponent } from './UI/stocks/list-stock-taken-out/list-stock-taken-out.component';
import { ListInventoryComponent } from './UI/stocks/list-inventory/list-inventory.component';
import { OperationStockComponent } from './UI/stocks/operation-stock/operation-stock.component';
import { ListCreancesComponent } from './UI/recouvrement/list-creances/list-creances.component';
import { CreateCreanceComponent } from './UI/recouvrement/create-creance/create-creance.component';
import { CreateReglementComponent } from './UI/recouvrement/create-reglement/create-reglement.component';
import { ListReglementsComponent } from './UI/recouvrement/list-reglements/list-reglements.component';
import { ListDetteComponent } from './UI/dette-fornisuers/list-dette/list-dette.component';
import { CreateDetteComponent } from './UI/dette-fornisuers/create-dette/create-dette.component';
import { ListReglementDetteComponent } from './UI/dette-fornisuers/list-reglement-dette/list-reglement-dette.component';
import { CreateReglementDetteComponent } from './UI/dette-fornisuers/create-reglement-dette/create-reglement-dette.component';
import { ListBuggetComponent } from './UI/suivi -financier/list-bugget/list-bugget.component';
import { ListTransactionComponent } from './UI/suivi -financier/list-transaction/list-transaction.component';
import { CreateTransactionComponent } from './UI/suivi -financier/create-transaction/create-transaction.component';
import { ListComponent } from './UI/facture/list/list.component';
import { CreateFactureComponent } from './UI/facture/create-facture/create-facture.component';
import { DetailsFactureComponent } from './UI/facture/details-facture/details-facture.component';
import { HomeComponent } from './UI/home/home.component';
import { DashboardDettesComponent } from './UI/KPI/dashboard-dettes/dashboard-dettes.component';
import { DashboardCreancesComponent } from './UI/KPI/dashboard-creances/dashboard-creances.component';
import { DashboardFinancesComponent } from './UI/KPI/dashboard-finances/dashboard-finances.component';
import { DashboardStocksComponent } from './UI/KPI/dashboard-stocks/dashboard-stocks.component';
import { DashboardFacturesComponent } from './UI/KPI/dashboard-factures/dashboard-factures.component';
import { ListCategoriesComponent } from './UI/categories/list-categories/list-categories.component';
import { CreateCategoriesComponent } from './UI/categories/create-categories/create-categories.component';
import { UpdateCategoriesComponent } from './UI/categories/update-categories/update-categories.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RoSystemComponent,
    SettingComponent,
    ListUsersComponent,
    UpdateUsersComponent,
    CreateUsersComponent,
    ErrorPageComponent,
    CreateRoleComponent,
    UpdateRoleComponent,
    ListRoleComponent,
    ListStockComponent,
    CreateStockComponent,
    UpdateStockComponent,
    ListStockEntriesComponent,
    ListStockTakenOutComponent,
    ListInventoryComponent,
    OperationStockComponent,
    ListCreancesComponent,
    CreateCreanceComponent,
    CreateReglementComponent,
    ListReglementsComponent,
    ListDetteComponent,
    CreateDetteComponent,
    ListReglementDetteComponent,
    CreateReglementDetteComponent,
    ListBuggetComponent,
    ListTransactionComponent,
    CreateTransactionComponent,
    ListComponent,
    CreateFactureComponent,
    DetailsFactureComponent,
    HomeComponent,
    DashboardDettesComponent,
    DashboardCreancesComponent,
    DashboardFinancesComponent,
    DashboardStocksComponent,
    DashboardFacturesComponent,
    ListCategoriesComponent,
    CreateCategoriesComponent,
    UpdateCategoriesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminTemplateModule,
    CommonModule,
    FormsModule,
    NgxPaginationModule,
    ReactiveFormsModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
