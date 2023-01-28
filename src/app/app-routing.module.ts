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
      }
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
