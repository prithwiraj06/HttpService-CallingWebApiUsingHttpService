import {Component,OnInit} from '@angular/core';
import { IEmployee } from '../EmployeeInterface/employee.interface';
import { EmployeeService } from '../EmployeeService/employee.service';
import {Http} from '@angular/http'
@Component({
    selector:'employeeList',
    templateUrl:'./employeeList.component.html'
})
export class EmployeeListComponent implements OnInit
{
    statusMessage:string='Employee Is loding Please Wait';
    employee:IEmployee[];
    constructor(private _employeeServive:EmployeeService){}

    ngOnInit()
    {
        this._employeeServive.getEmployees().subscribe(employeeData=>this.employee=employeeData,(error)=>{
            this.statusMessage="Server is down please try later";
            console.info(error);
        }
        );
    }
}