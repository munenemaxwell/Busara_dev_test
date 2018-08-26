import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/register.service';
import { TokenService } from '../../services/token.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public form  ={
    name:null,
    fname:null,
    sname:null,
    password:null,
    password_confirmation:null,
    mobile_number:null
    
  }

  public error  =null;

  constructor(
    private register_service : RegisterService,
    private tokenservice : TokenService,
    private router : Router
  
  ) { }

  onsubmit(){

    this.register_service.register(this.form).subscribe(

      data => this.handle_login(data),// console.log(data),

      error =>this.handle_error(error)

    );

  }

  handle_login(data){

    this.tokenservice.saveToken(data);

    this.router.navigate(['/home']);

  }

  handle_error(error){
    this.error=error.error.error
  }

  ngOnInit() {
  }

}
