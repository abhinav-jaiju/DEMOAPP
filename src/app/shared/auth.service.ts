import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private  httpClient : HttpClient) { }

  // //get username and password
  // getUserNameByPassword(user : User):Observable<any>{
    
  //   console.log(user.UserName);
  //   console.log(user.UserPassword);
  //   return this.httpClient.get(environment.roleUrl+"api/search"+user.UserName+"&"+user.UserPassword);
  // }

  public loginVerify(user : User){
    //calling web service and passing username and password
    console.log(user.UserName);
    return this.httpClient.get(environment.roleUrl+"/api/user/login/"+user.UserName+"&"+user.UserPassword);
  }

  //logout
  public logout(){
    localStorage.removeItem("UserName");
    localStorage.removeItem("ACESSROLE");
    sessionStorage.removeItem("USERNAME");
  }
}
