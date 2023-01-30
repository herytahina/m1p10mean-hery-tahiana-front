import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './layout/admin/admin.component';
import {AuthComponent} from './layout/auth/auth.component';
import { CarDepositComponent } from './pages/car-deposit/car-deposit.component';
import { CarListComponent } from './pages/car-list/car-list.component';
import { CarRepairsComponent } from './pages/car-repairs/car-repairs.component';
import { CarHistoryComponent } from './pages/car-history/car-history.component';
import { MechanicComponent } from './layout/mechanic/mechanic.component';
import { SimplePageComponent } from './pages/simple-page/simple-page.component';
import { CarReceptionComponent } from './pages/car-reception/car-reception.component';
import { ReceivedCarsComponent } from './pages/received-cars/received-cars.component';
import { ReceivedCarsDetailsComponent } from './pages/received-cars-details/received-cars-details.component';
import { CarRequestedComponent } from './pages/car-requested/car-requested.component';
import { CarRequestedDetailsComponent } from './pages/car-requested-details/car-requested-details.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'car',
        pathMatch: 'full'
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
    ]
  },
  {
    path: '',
    component: MechanicComponent,
    children: [
      {
        path: 'mechanic',
        component: SimplePageComponent
      },
      {
        path: 'reception',
        component: CarReceptionComponent
      },
      {
        path: 'received-cars',
        component: ReceivedCarsComponent
      },
      {
        path: 'received-cars-details/:id',
        component: ReceivedCarsDetailsComponent
      },
      {
        path: 'requested-cars',
        component: CarRequestedComponent
      },
      {
        path: 'car-requested-details/:id',
        component: CarRequestedDetailsComponent
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
