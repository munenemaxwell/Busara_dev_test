import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class GetvideosService {

  public headers: any;

  public _url_all: string ='http://api.smartduka.busaracenterlab.org/api/v1/videos/';
  public _url_categ: string ='http://api.smartduka.busaracenterlab.org/api/v1/videos/?category_id=';

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

  get_videos():Observable<any>{
   
    return this.http.get(this._url_all,this.headers);

  }

  get_categvideos(id):Observable<any>{

    return this.http.get(this._url_categ+id,this.headers);

  }

}
