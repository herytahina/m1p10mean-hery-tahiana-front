import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './layout/admin/admin.component';
import {AuthComponent} from './layout/auth/auth.component';
import { CarDepositComponent } from './pages/car-deposit/car-deposit.component';
import { CarListComponent } from './pages/car-list/car-list.component';
import { CarRepairsComponent } from './pages/car-repairs/car-repairs.component';
import { CarHistoryComponent } from './pages/car-history/car-history.component';
import { AdministratorListComponent } from './pages/administrator-list/administrator-list.component';
import { AdministratorAddComponent } from './pages/administrator-add/administrator-add.component';
import { AdministratorModifyComponent } from './pages/administrator-modify/administrator-modify.component';

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
        path: 'administrator-modify',
        component: AdministratorModifyComponent
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
