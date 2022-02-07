import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from './employee';
import { Department } from './department'; 

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  
  //retrieve all data from get method(getAll Employees)
  //http client we need to import but we need to import in app.module
  employees: Employee[]; //stores all employee detail
  departments : Department[];
  formData : Employee = new Employee(); // one employee detail 


  constructor( private httpClient: HttpClient) { }

  //get all employees --1
  getAllEmployees():Observable<any> {
    
   // https://localhost:44372/api/employees  -- environment
    
   return this.httpClient.get(environment.apiUrl+'/api/employees');

  }
  //2
  bindListEmployees(){
    this.httpClient.get(environment.apiUrl+'/api/employees')
    .toPromise().then(
      response =>{
        console.log("From Services");
        console.log(response);
        this.employees = response as Employee[]
      }
    ); 
  }

  //get all departments for binding
  bindListDepartments(){
    this.httpClient.get(environment.apiUrl+'/api/department')
    .toPromise().then(
      response =>{
        console.log("From Services");
        console.log(response);
        this.departments = response as Department[]
      }
    ); 
  }


  //get employee by id
  getEmployeeById(id : number): Observable<any>{
    return this.httpClient.get(environment.apiUrl+'/api/employees/'+id);
  }
  //insert employee
  insertEmployeeById(employee : Employee): Observable<any>{
    return this.httpClient.post(environment.apiUrl+'/api/employees',employee);
  }
  //update employee
  updateEmployeeById(employee : Employee): Observable<any>{
    return this.httpClient.put(environment.apiUrl+'/api/employees',employee);
  }
  //delete employee
deleteEmployee(id : number){
  return this.httpClient.delete(environment.apiUrl+'/api/employees/'+id);
}

}
