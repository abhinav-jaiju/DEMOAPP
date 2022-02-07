import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  constructor(public employeeService : EmployeeService) { }

  ngOnInit(): void {
    //get departments
    this.employeeService.bindListDepartments();
    
  }

  onSubmit(form : NgForm){
    console.log(form.value);
    let addId = this.employeeService.formData.EmpId;
    
    //insert or update

    if(addId == 0 || addId == null){
      //insert
      this.insertEmployeeRecord(form)
      
    }
    else{
      //update
    }
  }

  //insert method 
  insertEmployeeRecord(form?:NgForm){
    console.log("Inserting a record...");
    this.employeeService.insertEmployeeById(form.value).subscribe(
      result =>{
        console.log(result);
      },
      (error) =>{
        console.log(error);
      }
    );
  }

}
