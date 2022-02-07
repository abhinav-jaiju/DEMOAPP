import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CoordinatorComponent } from './coordinator/coordinator.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ManagerComponent } from './manager/manager.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [

  //Naviate -- Routes
  {path:'login', component:LoginComponent},
  {path:'home', component:HomeComponent},
  {path:'employee', component:EmployeeComponent},
  {path:'employeelist', component:EmployeeListComponent},
  {path:'admin', component:AdminComponent, canActivate : [AuthGuard], data:{role: '1'}},
  {path:'manager', component:ManagerComponent, canActivate : [AuthGuard], data:{role: '2'}},
  {path:'coordinator', component:CoordinatorComponent, canActivate : [AuthGuard], data:{role: '3'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
