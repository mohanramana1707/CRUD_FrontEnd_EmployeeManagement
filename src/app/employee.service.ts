import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

private baseUrl="/api/v1/employee";
private createEmployeeUrl="/api/v1/addEmployee";
private updateEmployeeUrl="/api/v1/update";
private deleteEmployeeUrl="/api/v1/deleteEmployee"

  constructor(private httpClient: HttpClient) { }

  getEmployeeList():Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseUrl}`);
  }

  createEmployee(emp:Employee) : Observable<Object>{
    return this.httpClient.post(`${this.createEmployeeUrl}`,emp);
  }

  getEmployeeById(id:number) :Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.baseUrl}/${id}`);
  }

  updateEmployee(id:number, emp:Employee):Observable<Employee>{
    return this.httpClient.put<Employee>(`${this.updateEmployeeUrl}/${id}`,emp);
  }

  deleteEmployee(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.deleteEmployeeUrl}/${id}`);
  }

 

}
