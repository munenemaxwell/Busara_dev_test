import { Component, OnInit } from '@angular/core';
import { ResetPasswordService } from '../../services/reset-password.service';

@Component({
  selector: 'app-passwordchange',
  templateUrl: './passwordchange.component.html',
  styleUrls: ['./passwordchange.component.css']
})
export class PasswordchangeComponent implements OnInit {

  public form = {
    oldpass: '',
    newpass: ''
  }

  public error = '';
  public notification = '';

  constructor(private reset_pass: ResetPasswordService) { }

  ngOnInit() {
  }

  redirect(data): void {
    this.notification = data;
  }

  onsubmit(): void {

    this.reset_pass.reset(this.form).subscribe(
      data =>this.redirect(data),
      error=>console.log(error)
    );
  }

  

}
