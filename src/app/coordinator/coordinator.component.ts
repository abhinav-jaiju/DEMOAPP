import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-coordinator',
  templateUrl: './coordinator.component.html',
  styleUrls: ['./coordinator.component.scss']
})
export class CoordinatorComponent implements OnInit {

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
