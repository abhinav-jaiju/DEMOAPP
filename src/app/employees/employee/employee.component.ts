import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/shared/employee.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  //declare variable 
  empId : number;

  constructor(public employeeService : EmployeeService,
    private route : ActivatedRoute,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    //get departments
    this.employeeService.bindListDepartments();

    //get empId from activate route
    this.empId = this.route.snapshot.params['empId'];

    //getEmployeebyId
    if(this.empId!=0 || this.empId != null){
      //get employee
      this.employeeService.getEmployeeById(this.empId).subscribe(
        result =>{
          console.log(result);
          //format the date :yyy-MM-dd
          var datepipe = new DatePipe("en-UK");
          let formatedDate : any = datepipe.transform(result.DateOfJoining,'yyy-MM-dd');
          result.DateOfJoining = formatedDate;

          //asign this resukt to empService formData
          this.employeeService.formData = Object.assign({},result);
        },
        error =>{
          console.log(error);
        }
      );
    }

  }
//submit form 
  onSubmit(form : NgForm){
    console.log(form.value);
    let addId = this.employeeService.formData.EmpId;
    
    //insert or update

    if(addId == 0 || addId == null){
      //insert
      this.insertEmployeeRecord(form);
      
    }
    else{
      //update
      this.updateEmployeeRecord(form);
    }
  }

  //insert method 
  insertEmployeeRecord(form?:NgForm){
    console.log("Inserting a record...");
    this.employeeService.insertEmployeeById(form.value).subscribe(
      result =>{
        console.log(result);
        //calling reset form for clear the contents
        this.resetFrom(form);
        this.toastr.success('Employee Record has been inserted','EmpApp v2022');
      },
      (error) =>{
        console.log(error);
        
      }
    );
  }

  //Update method
  updateEmployeeRecord(form?:NgForm){
    console.log("Updating a record...");
    this.employeeService.updateEmployeeById(form.value).subscribe(
      result =>{
        console.log(result);
        //calling reset form for clear the contents
        this.resetFrom(form);
        this.toastr.success('Employee Record has been inserted','EmpApp v2022');
      },
      (error) =>{
        console.log(error);
      }
    );
  }


  //clear all contents after submit --reinitialize 
  resetFrom(form?: NgForm){
    if(form != null){
      form.resetForm();
    }
  }

}
