import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public headers: any;

  public login_url: string ='http://api.smartduka.busaracenterlab.org/oauth/token/';
 

  constructor(private http :HttpClient ) {

    this.headers={
      headers: new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'})
    }
  }

  login(data):Observable<any> {
     
  //console.log('username '+data.username+' password '+data.password);

    let oauth2_client_id = 'DDN4xTPsvxU1HCIEvqcWuRP00cVnEA9FE5f6k8e5';
    let oauth2_client_secret = 'h74XB8mvGBilhkmjfQS5uIRV1mC6nHSlQJDk25W1PEP6RJjIson9lGovcvbCByV9jKxsJFRbrDp3H7AqhyIWhIrqMNpoKpTTwZgWg2TqJbkxm54yEllidOyUX6jBcZfL';

    const body = 'client_id={0}&client_secret={1}&grant_type=password&username={2}&password={3}'
        .replace('{0}', oauth2_client_id)
        .replace('{1}', oauth2_client_secret)
        .replace('{2}', data.username)
        .replace('{3}', data.password);


    return this.http.post(this.login_url,body,this.headers);

    ​ 

  }

}
