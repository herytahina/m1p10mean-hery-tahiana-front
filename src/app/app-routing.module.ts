import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './layout/admin/admin.component';
import {AuthComponent} from './layout/auth/auth.component';
import { CarDepositComponent } from './pages/car-deposit/car-deposit.component';
import { CarListComponent } from './pages/car-list/car-list.component';
import { CarRepairsComponent } from './pages/car-repairs/car-repairs.component';
import { CarHistoryComponent } from './pages/car-history/car-history.component';
import { AdministratorListComponent } from './pages/administrator-list/administrator-list.component';
import { AdministratorAddComponent } from './pages/administrator-add/administrator-add.component';
import { AdministratorModifyComponent } from './pages/administrator-modify/administrator-modify.component';
import { PaymentCarListComponent } from './pages/payment-car-list/payment-car-list.component';
import { PaymentAddComponent } from './pages/payment-add/payment-add.component';
import { ExpenseListComponent } from './pages/expense-list/expense-list.component';
import { ExpenseAddComponent } from './pages/expense-add/expense-add.component';
import { ExpenseModifyComponent } from './pages/expense-modify/expense-modify.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }, {
        path: 'simple-page',
        loadChildren: () => import('./pages/simple-page/simple-page.module').then(m => m.SimplePageModule)
      }, 
      {
        path: 'car-deposit',
        component: CarDepositComponent
      },
      {
        path: 'car',
        component: CarListComponent
      },
      {
        path: 'car-repairs/:id',
        component: CarRepairsComponent
      },
      {
        path: 'car-history/:id',
        component: CarHistoryComponent
      },
      {
        path: 'administrator',
        component: AdministratorListComponent
      },
      {
        path: 'administrator-add',
        component: AdministratorAddComponent
      },
      {
        path: 'administrator-modify/:id',
        component: AdministratorModifyComponent
      },
      {
        path: 'payment',
        component: PaymentCarListComponent
      },
      {
        path: 'payment-new/:car_id',
        component: PaymentAddComponent
      },
      {
        path: 'expense',
        component: ExpenseListComponent
      },
      {
        path: 'expense-add',
        component: ExpenseAddComponent
      },
      {
        path: 'expense-modify/:id',
        component: ExpenseModifyComponent
      },
    ]
  },
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'authentication',
        loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
