import { Injectable } from '@angular/core';
import { Router,CanActivate } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    public jwtHelper: JwtHelperService,
    private router: Router
  
  ) { }

  public isAuthenticated(): boolean {

    const token = localStorage.getItem('access_token');
    // Check whether the token is expired and return
    // true or false
    //!this.jwtHelper.isTokenExpired(token);

    if(token == null){

      return false

    }else{

      //check expiration time
      

      return true; 

    }
   
    
    
    
   
  }

  canActivate(): boolean {
    
    if (!this.isAuthenticated()) {

      this.router.navigate(['/login']);

      return false;
    }
    return true;
  
  }
}
