import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  public headers: any;

  public login_url: string ='http://api.smartduka.busaracenterlab.org/oauth/token/';
 

  constructor(private http :HttpClient ) {

    this.headers={
      headers: new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'})
    }
  }

  register(data) : Observable<any> {

    return this.http.post(this.login_url,data,this.headers);

  }

}
