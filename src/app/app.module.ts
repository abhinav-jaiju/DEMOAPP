import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import {EmployeeService} from './shared/employee.service';
import {HttpClientModule} from '@angular/common/http'
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { ManagerComponent } from './manager/manager.component';
import { CoordinatorComponent } from './coordinator/coordinator.component';
import { AuthGuard } from './shared/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeComponent,
    EmployeeListComponent,
    HomeComponent,
    LoginComponent,
    AdminComponent,
    ManagerComponent,
    CoordinatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [EmployeeService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
