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

import {ToastyModule} from 'ng2-toasty';
import { CommonModule } from '@angular/common';
import { MechanicComponent } from './layout/mechanic/mechanic.component';
import { SimplePageComponent } from './pages/simple-page/simple-page.component';
import { CarReceptionComponent } from './pages/car-reception/car-reception.component';
import { ReceivedCarsComponent } from './pages/received-cars/received-cars.component';
import { ReceivedCarsDetailsComponent } from './pages/received-cars-details/received-cars-details.component';
import { CarRequestedComponent } from './pages/car-requested/car-requested.component';
import { CarRequestedDetailsComponent } from './pages/car-requested-details/car-requested-details.component';
import { ClientAuthGuard } from './services/clientAuth.guard.service';
import { MechanicAuthGuard } from './services/mechanicAuth.guard.service';
import { AuthAuthGuard } from './services/authAuth.guard.service';

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
    MechanicComponent,
    SimplePageComponent,
    CarReceptionComponent,
    ReceivedCarsComponent,
    ReceivedCarsDetailsComponent,
    AdministratorListComponent,
    AdministratorAddComponent,
    AdministratorModifyComponent,
    CarRequestedComponent,
    CarRequestedDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    ToastyModule.forRoot(),
    CommonModule,
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    AuthService,
    CarService,
    ClientAuthGuard,
    MechanicAuthGuard,
    AuthAuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
