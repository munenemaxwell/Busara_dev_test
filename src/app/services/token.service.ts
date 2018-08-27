import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  saveToken(data) {

     const time=new Date();

    localStorage.setItem('access_token',data.access_token);
    localStorage.setItem('refresh_token',data.refresh_token);
    localStorage.setItem('expires_in',data.expires_in);
    localStorage.setItem('scope',data.scope);
   

  }

  deleteToken(){

    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('expires_in');
    localStorage.removeItem('scope');


  }
  getToken():string{

    return localStorage.getItem('access_token');
  }
}
