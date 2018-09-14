import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './Employee/employeeList.component';
import { EmployeeService } from './EmployeeService/employee.service';
import {HttpModule} from '@angular/http'
@NgModule({
  declarations: [
    AppComponent,EmployeeListComponent
  ],
  imports: [
    BrowserModule,HttpModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
