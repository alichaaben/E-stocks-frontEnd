import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './UI/login/login.component';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import { DashboardComponent } from './UI/KPI/dashboard/dashboard.component';
import { SettingComponent } from './UI/setting/setting.component';
import { CreateRoleComponent } from './UI/roles/create-role/create-role.component';
import { ListRoleComponent } from './UI/roles/list-role/list-role.component';
import { UpdateRoleComponent } from './UI/roles/update-role/update-role.component';
import { ListUsersComponent } from './UI/users/list-users/list-users.component';
import { CreateUsersComponent } from './UI/users/create-users/create-users.component';
import { UpdateUsersComponent } from './UI/users/update-users/update-users.component';
import { RoSystemComponent } from './UI/ro-system/ro-system.component';
import { ErrorPageComponent } from './UI/error-page/error-page.component';
import { ListStockComponent } from './UI/stocks/list-stock/list-stock.component';
import { CreateStockComponent } from './UI/stocks/create-stock/create-stock.component';
import { UpdateStockComponent } from './UI/stocks/update-stock/update-stock.component';
import { ListInventoryComponent } from './UI/stocks/list-inventory/list-inventory.component';
import { OperationStockComponent } from './UI/stocks/operation-stock/operation-stock.component';
import { ListStockEntriesComponent } from './UI/stocks/list-stock-entries/list-stock-entries.component';
import { ListStockTakenOutComponent } from './UI/stocks/list-stock-taken-out/list-stock-taken-out.component';
import { ListCreancesComponent } from './UI/recouvrement/list-creances/list-creances.component';
import { CreateCreanceComponent } from './UI/recouvrement/create-creance/create-creance.component';
import { ListReglementsComponent } from './UI/recouvrement/list-reglements/list-reglements.component';
import { CreateReglementComponent } from './UI/recouvrement/create-reglement/create-reglement.component';
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
import { DashboardStocksComponent } from './UI/KPI/dashboard-stocks/dashboard-stocks.component';
import { ListCategoriesComponent } from './UI/categories/list-categories/list-categories.component';
import { CreateCategoriesComponent } from './UI/categories/create-categories/create-categories.component';
import { UpdateCategoriesComponent } from './UI/categories/update-categories/update-categories.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },

  {
    path: 'admin',
    component: AdminTemplateComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },

      
/***************************** Admin ****************************************************/
      /*************** roles *************** */
      { path: 'roles', component: ListRoleComponent },
      { path: 'roles/create', component: CreateRoleComponent },
      { path: 'roles/update', component: UpdateRoleComponent },

      /*************** Users *************** */
      { path: 'users', component: ListUsersComponent },
      { path: 'users/create', component: CreateUsersComponent },
      { path: 'users/update', component: UpdateUsersComponent },

      /*************** settings *************** */
      { path: 'settings', component: SettingComponent },

      /********************************************************************************* */

      /*************** categories *************** */
      { path: 'categories', component: ListCategoriesComponent },
      { path: 'categories/create', component: CreateCategoriesComponent },
      { path: 'categories/update', component: UpdateCategoriesComponent },


      /*************** Gestion de stock *************** */
      { path: 'stocks', component: ListStockComponent },
      { path: 'stocks/create', component: CreateStockComponent },
      { path: 'stocks/update', component: UpdateStockComponent },
      { path: 'inventory', component: ListInventoryComponent },
      { path: 'operation', component: OperationStockComponent },
      { path: 'entries-list', component: ListStockEntriesComponent },
      { path: 'sorties-list', component: ListStockTakenOutComponent },

      /*************** recouvrements *************** */
      { path: 'creances', component: ListCreancesComponent },
      { path: 'creances/create', component: CreateCreanceComponent },
      { path: 'reglements', component: ListReglementsComponent },
      { path: 'reglements/create', component: CreateReglementComponent },

      /*************** Gestion de dette-forniseurs *************** */
      { path: 'dettes', component: ListDetteComponent },
      { path: 'dettes/create', component: CreateDetteComponent },
      { path: 'reglement-dette', component: ListReglementDetteComponent },
      { path: 'reglement-dette/create', component: CreateReglementDetteComponent },

      /*************** Suivi Financier *************** */
      { path: 'budgets', component: ListBuggetComponent },
      { path: 'transactions', component: ListTransactionComponent },
      { path: 'transactions/create', component: CreateTransactionComponent },

      /*************** Gestion des facture *************** */
      { path: 'list', component: ListComponent },
      { path: 'list/create', component: CreateFactureComponent },
      { path: 'list/details', component: DetailsFactureComponent },

      /*************** Les Dashboard *************** */
      { path: 'dashboard-stocks', component: DashboardStocksComponent },
      { path: 'dashboard-factures', component: ListComponent },
      { path: 'dashboard-dettes', component: ListComponent },
      { path: 'dashboard-ceances', component: ListComponent },
      { path: 'dashboard-finances', component: ListComponent },


      /*************** Ro-Systems *************** */
      { path: 'ro-systems', component: RoSystemComponent },

      /*************** Error Pages *************** */
      { path: 'error', component: ErrorPageComponent },
      { path: '**', component: ErrorPageComponent },
    ],
  },

  // Gestion des routes inexistantes hors admin
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
