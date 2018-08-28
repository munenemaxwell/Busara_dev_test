import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  public headers: any;

  public _url: string ='http://api.smartduka.busaracenterlab.org/api/v1/users/';
 

  constructor(private http :HttpClient ) {

    this.headers={
      headers: new HttpHeaders({'Content-Type':'application/json'})
    }
  }

  register(data) : Observable<any> {

    return this.http.post(this._url,data,this.headers);

  }

}
