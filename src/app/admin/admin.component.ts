import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  loggedUser : string ;
  constructor( private authService : AuthService, 
    private router : Router) { }

  ngOnInit(): void {
   this.loggedUser = localStorage.getItem("UserName")
  }

//logout
  logout(){
    this.authService.logout();
    this.router.navigateByUrl('login');
  }

  //disable back
  // preventBack() { window.history.forward(); }  
  //   setTimeout("preventBack()", 0);  
  //   window.onunload = function () { null }; 

}
