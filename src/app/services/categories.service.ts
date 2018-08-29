import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  public headers: any;

  public _url: string ='http://api.smartduka.busaracenterlab.org/api/v1/categories/';
 

  constructor(
    private http: HttpClient,
    private tokenservice :TokenService
  ) { 
    this.headers={
      headers: new HttpHeaders({
        'Content-Type':'application/x-www-form-urlencoded',
        
        'Authorization':'Bearer '+ this.tokenservice.getToken()
    })
    }
  }

  get_list():Observable<any>{
   
    return this.http.get(this._url,this.headers);

  }
}
