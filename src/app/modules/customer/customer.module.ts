import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, DatePipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './components/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeRegistrationComponent } from './components/employee-registration/employee-registration.component';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TurnsComponentComponent } from './components/turns-component/turns-component.component';
import { BtnNoCustomerComponent } from './components/btn-no-customer/btn-no-customer.component';
import { BtnCustomerComponent } from './components/btn-customer/btn-customer.component';
import { LoginComponent } from './components/login/login.component';
import { EmployeeService } from './services/employee.service';
import { RoleService } from './services/role.service';
import { TurnService } from './services/turn.service';
import { LoginService } from './services/login.service';
import { CreateCustomerComponent } from './components/create-customer/create-customer.component';
import { CustomerService } from './services/customer.service';
import { CreateRolComponent } from './components/create-rol/create-rol.component';
import { UserService } from './services/user.service';
import { ModifyUserRolComponent } from './components/modify-user-rol/modify-user-rol.component';
import { ModifyUserComponent } from './components/modify-user/modify-user.component';


@NgModule({
  declarations: [HomeComponent, TurnsComponentComponent, BtnNoCustomerComponent, BtnCustomerComponent, EmployeeRegistrationComponent, LoginComponent, CreateCustomerComponent, CreateRolComponent, ModifyUserRolComponent, ModifyUserComponent ],
  providers: [EmployeeService, RoleService, TurnService, LoginService, CustomerService, DatePipe, UserService],
  imports: [CommonModule, BrowserModule, ReactiveFormsModule, NgbModule, FormsModule, HttpClientModule],
  exports: [HomeComponent],
})
export class CustomerModule {}