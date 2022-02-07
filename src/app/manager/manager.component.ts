import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss']
})
export class ManagerComponent implements OnInit {

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
}
