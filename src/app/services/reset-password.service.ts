import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class ResetPasswordService {

  public headers: any;
  public _url: string = 'http://api.smartduka.busaracenterlab.org/api/v1/users/change-password';
 

  constructor(
    private http: HttpClient,
    private tokenservice: TokenService  
  ) {

    this.headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Bearer ' + this.tokenservice.getToken()
      })
    }
  }

  reset(data): Observable<any> {

    const body = 'old_password={0}&new_password={1}'
      .replace('{0}', data.oldpass)
      .replace('{1}', data.newpass);

    return this.http.post(this._url, body, this.headers);

  }

}
