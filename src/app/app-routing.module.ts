import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './layout/admin/admin.component';
import {AuthComponent} from './layout/auth/auth.component';
import { CarDepositComponent } from './pages/car-deposit/car-deposit.component';
import { CarListComponent } from './pages/car-list/car-list.component';
import { CarRepairsComponent } from './pages/car-repairs/car-repairs.component';
import { CarHistoryComponent } from './pages/car-history/car-history.component';
import { MechanicComponent } from './layout/mechanic/mechanic.component';
import { CarReceptionComponent } from './pages/car-reception/car-reception.component';
import { ReceivedCarsComponent } from './pages/received-cars/received-cars.component';
import { ReceivedCarsDetailsComponent } from './pages/received-cars-details/received-cars-details.component';
import { AdministratorListComponent } from './pages/administrator-list/administrator-list.component';
import { AdministratorAddComponent } from './pages/administrator-add/administrator-add.component';
import { AdministratorModifyComponent } from './pages/administrator-modify/administrator-modify.component';
import { CarRequestedComponent } from './pages/car-requested/car-requested.component';
import { CarRequestedDetailsComponent } from './pages/car-requested-details/car-requested-details.component';
import { ClientAuthGuard } from './services/clientAuth.guard.service';
import { MechanicAuthGuard } from './services/mechanicAuth.guard.service';
import { AuthAuthGuard } from './services/authAuth.guard.service';
import { PaymentCarListComponent } from './pages/payment-car-list/payment-car-list.component';
import { PaymentAddComponent } from './pages/payment-add/payment-add.component';
import { ExpenseListComponent } from './pages/expense-list/expense-list.component';
import { ExpenseAddComponent } from './pages/expense-add/expense-add.component';
import { ExpenseModifyComponent } from './pages/expense-modify/expense-modify.component';
import { FinancesComponent } from './layout/finances/finances.component';
import { FinancesAuthGuard } from './services/financesAuth.guard.service';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'car',
        canActivate: [ClientAuthGuard],
        pathMatch: 'full'
      }, 
      {
        path: 'car-deposit',
        canActivate: [ClientAuthGuard],
        component: CarDepositComponent
      },
      {
        path: 'car',
        canActivate: [ClientAuthGuard],
        component: CarListComponent
      },
      {
        path: 'car-repairs/:id',
        canActivate: [ClientAuthGuard],
        component: CarRepairsComponent
      },
      {
        path: 'car-history/:id',
        canActivate: [ClientAuthGuard],
        component: CarHistoryComponent
      }
    ]
  },
  {
    path: '',
    component: MechanicComponent,
    children: [
      {
        path: 'reception',
        canActivate: [MechanicAuthGuard],
        component: CarReceptionComponent
      },
      {
        path: 'received-cars',
        canActivate: [MechanicAuthGuard],
        component: ReceivedCarsComponent
      },
      {
        path: 'received-cars-details/:id',
        component: ReceivedCarsDetailsComponent
      },
      {
        path: 'requested-cars',
        canActivate: [MechanicAuthGuard],
        component: CarRequestedComponent
      },
      {
        path: 'car-requested-details/:id',
        canActivate: [MechanicAuthGuard],
        component: CarRequestedDetailsComponent
      },
      {
        path: 'administrator',
        canActivate: [MechanicAuthGuard],
        component: AdministratorListComponent
      },
      {
        path: 'administrator-add',
        canActivate: [MechanicAuthGuard],
        component: AdministratorAddComponent
      },
      {
        path: 'administrator-modify/:id',
        canActivate: [MechanicAuthGuard],
        component: AdministratorModifyComponent
      },
    ]
  },
  {
    path: '',
    component: FinancesComponent,
    children: [
      {
        path: 'payment',
        canActivate: [FinancesAuthGuard],
        component: PaymentCarListComponent
      },
      {
        path: 'payment-new/:car_id',
        canActivate: [FinancesAuthGuard],
        component: PaymentAddComponent
      },
      {
        path: 'expense',
        canActivate: [FinancesAuthGuard],
        component: ExpenseListComponent
      },
      {
        path: 'expense-add',
        canActivate: [FinancesAuthGuard],
        component: ExpenseAddComponent
      },
      {
        path: 'expense-modify/:id',
        canActivate: [FinancesAuthGuard],
        component: ExpenseModifyComponent
      },
    ]
  },
  {
    path: '',
    component: AuthComponent,
    canActivate: [AuthAuthGuard],
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
