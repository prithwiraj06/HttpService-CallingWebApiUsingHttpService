import{Injectable} from '@angular/core'
import { IEmployee } from '../EmployeeInterface/employee.interface';
import {Observable} from 'rxjs';
//import { Observable } from 'rxjs/Observable';
import {Http,Response} from '@angular/http'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';



@Injectable()
export class EmployeeService
{
    employee:IEmployee[];
    constructor(private _http:Http){}
    getEmployees():Observable<IEmployee[]>
    {
        return this._http.get('http://localhost:44750/api/employee').map((response:Response)=><IEmployee[]>response.json()).catch(this.handleError);
    }
    handleError(error:Response)
    {
        console.log(error);
        return Observable.throw(error);
    }
}