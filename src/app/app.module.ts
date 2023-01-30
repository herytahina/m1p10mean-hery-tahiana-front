import { BrowserModule } from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AdminComponent } from './layout/admin/admin.component';
import { BreadcrumbsComponent } from './layout/admin/breadcrumbs/breadcrumbs.component';
import { TitleComponent } from './layout/admin/title/title.component';
import { AuthComponent } from './layout/auth/auth.component';
import {SharedModule} from './shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';

import { HttpClientModule } from '@angular/common/http';
import { CarDepositComponent } from './pages/car-deposit/car-deposit.component';
import { CarListComponent } from './pages/car-list/car-list.component';
import { CarService } from './services/car.service';
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

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    BreadcrumbsComponent,
    TitleComponent,
    AuthComponent,
    CarDepositComponent,
    CarListComponent,
    CarRepairsComponent,
    CarHistoryComponent,
    AdministratorListComponent,
    AdministratorAddComponent,
    AdministratorModifyComponent,
    PaymentCarListComponent,
    PaymentAddComponent,
    ExpenseListComponent,
    ExpenseAddComponent,
    ExpenseModifyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    HttpClientModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    AuthService,
    CarService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
