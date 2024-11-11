import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface Employees {
  Id: number;
  Name: string;
  Age: number;
  Mark: number;
}

const baseurl = 'http://localhost:61344/api/API/';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor(private http: HttpClient) { }

  addEmployee(emp: any): Observable<any> {
    return this.http.post(baseurl + 'addemp', emp);
  }
  getAllEmployees(): Observable<any> {
    return this.http.get<Employees>(baseurl + 'getallemps')
  }
  deleteEmployee(id: number): Observable<any> {
    return this.http.delete<Employees>(baseurl + 'empdelete/' + id)
  }
  getEmployee(id: number): Observable<any> {
    return this.http.get<Employees>(baseurl + 'getemp/' + id)
  }
  editEmployee(id: number, employeeData: Employees): Observable<any> {
    return this.http.put<Employees>(baseurl + 'empedit/' + id, employeeData)
  }

}
