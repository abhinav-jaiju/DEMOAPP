import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  //declare variable 
  page: number = 1;
  filter: string;

  constructor(public employeeService : EmployeeService) { }

    ngOnInit(): void {
    console.log("Welcome to LifeCycle Hook");
    //this.getEmployees();
  

    this.employeeService.bindListEmployees();
    }
    getEmployees(){
    //call service method
    this.employeeService.getAllEmployees().subscribe(
      response =>{
        console.log("Retreiving from list");
        console.log(response);
      },
      error =>{
        console.log("Something is wrong");
        console.log(error);
      }

    );
    };

    //Update Employee 
    updateEmployee(empId :number){
    console.log(empId);
    // navigate to edit form with selected employee details
    }

    //Delete Emplyee
    deleteEmployee(empId :number){
    if(confirm('Are you sure, you want to DELETE this record')){
      this.employeeService.deleteEmployee(empId).subscribe(
        response =>{
          this.employeeService.bindListEmployees();
        },
        error=>{
          console.log(error);
        }
      );
    }
     }



  }