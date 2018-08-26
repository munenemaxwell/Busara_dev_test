import { Component, OnInit } from '@angular/core';
import { TokenService } from '../../services/token.service';
import { LoginService } from '../../services/login.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form={
    username:'',
    password:''
  }  

  public message : string;
   
  public error=null;

  constructor(
        private loginservice:LoginService,
        private tokenservice:TokenService,
        private router:Router
      
      ) { }

  onsubmit(){

    this.loginservice.login(this.form).subscribe(
  
      data => this.handle_login(data),// console.log(data),

      error =>this.handle_error(error)

    );
    

  }

  handle_login(data){

    this.tokenservice.saveToken(data);

    this.router.navigate(['/home']);

  }


  handle_error(error){

    console.log(error);

    this.error=error['error']['non_field_errors'][0];
  }

  ngOnInit() {
    
  }
  
}
