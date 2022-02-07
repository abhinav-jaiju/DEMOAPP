import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/user';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //declare variables 
  loginForm! : FormGroup;
  isSubmitted = false;
  errors = '';
  loginUser : any = new User();
  
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private authservice: AuthService) { }

  ngOnInit(): void {

    //create a reactive form model
    this.loginForm = this.formBuilder.group(
      {
        //formControl fields
        UserName : ['',[Validators.required]],
        UserPassword : ['',[Validators.required]]
      }
    );
  }

  //get control for validation 
  get formControls(){
    return this.loginForm.controls;
  }

  //login verify for credentials
  loginCredentials(){

    this.isSubmitted = true;
    console.log("Submitted form for credentials");

    if(this.loginForm.valid){
      console.log("with Valid")
      this.errors = "";
      //calling method from auth service --authentication and autherize
      this.authservice.loginVerify(this.loginForm.value)
      .subscribe(
        data => {
          console.log(data);
          this.loginUser = data;
          //check the role based on  role RoleId, it redirect to the respective component
          if(this.loginUser[0].RoleId === 1){
            
            console.log("Admin");
            localStorage.setItem("UserName",this.loginUser[0].UserName);
            localStorage.setItem("ACESSROLE",this.loginUser[0].RoleId);
            sessionStorage.setItem("USERNAME",this.loginUser[0].UserName);
            this.router.navigateByUrl('/admin');
          }
          else if(this.loginUser[0].RoleId === 2){
            console.log("Manager");
            localStorage.setItem("UserName",this.loginUser[0].UserName);
            localStorage.setItem("ACESSROLE",this.loginUser[0].RoleId);
            sessionStorage.setItem("USERNAME",this.loginUser[0].UserName);
            this.router.navigateByUrl('/manager');
          }
          else if(this.loginUser[0].RoleId === 3){
            console.log("Coordinator");
            localStorage.setItem("UserName",this.loginUser[0].UserName);
            localStorage.setItem("ACESSROLE",this.loginUser[0].RoleId);
            sessionStorage.setItem("USERNAME",this.loginUser[0].UserName);
            this.router.navigateByUrl('/coordinator');
          }
          else{
            this.errors ="Sorry! NOT Authenticate/authorize to access this module";
          }
        },
        errors =>{
          this.errors ="invalid username and password, try again" 
        }
      );

    }

    if(this.loginForm.invalid){
      console.log("Is Invalid");
      return;
    }
  }

}
