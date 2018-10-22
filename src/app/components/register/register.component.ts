import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/register.service';
import { TokenService } from '../../services/token.service';
import { GetlocationsService } from '../../services/getlocations.service';
import { LoginService } from '../../services/login.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  public form ={
    email: '',
    username:'',
    first_name: '',
    last_name: '',
    is_active: true,
    is_staff: false,
    is_superuser: false,
    groups: [],
    phone_number: '',
    is_trainer: false,
    trainees: [],
    date_joined: null,
    location: '',
    password: ''
}

  public errors  =null;
  public locations :any='';
  public generic_error='';
  public valid:boolean =false;

  constructor(
    private register_service : RegisterService,
    private loginservice:LoginService,
    private tokenservice : TokenService,
    private router : Router,
    private getlocations_service :GetlocationsService
  
  ) { }
  
  handle_error(error){
    this.errors=error['error']['non_field_errors'];
    
  }


  onsubmit(){

    const date = new Date();
    let formated= date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    this.form.date_joined=formated;

    this.register_service.register(this.form).subscribe(

      data =>this.handle_login(data),// console.log(data),

      error =>this.handle_error(error)

    );

  }

  success_register(data){

    this.tokenservice.saveToken(data);

    this.router.navigate(['/home']);

  }

  handle_login(data){

    let credentials={
      username:data.email,
      password:this.form.password
    }

    //console.log('credentials '+credentials.username +' pass '+credentials.password)
      

    this.loginservice.login(credentials).subscribe(

      
      data=>this.success_register(data),
      error=>this.generic_error=error

    );
    

  }

  validate(){
    
    let username_option=this.form.username;
    let patt = new RegExp("^[^\s@]+@[^\s@]+\.[^\s@]+$");
    let res = patt.test(username_option.toString()); 
    this.valid=res;
   
  }

  ngOnInit() {
    this.getlocations_service.get_all_locations().subscribe(
      data=>this.locations=data.results,
      error=>this.generic_error=error
    );
  }

}
