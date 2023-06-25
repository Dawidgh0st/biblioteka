import { Component } from '@angular/core';
import { EmailValidator, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-formularz',
  templateUrl: './formularz.component.html',
  styleUrls: ['./formularz.component.scss']
})
export class FormularzComponent {

  constructor(private router: Router, private userService: UserService){}

  public forma = new FormGroup({
    imieInazwisko: new FormControl(null, { validators: [], updateOn: "change" }),
    email: new FormControl(null, { validators: [Validators.email], updateOn: "change" }),
    password: new FormControl(null, { validators: [], updateOn: "change" }),
    confirmPassword: new FormControl(null, { validators: [], updateOn: "change" })
  });
  username: string ='';
  email: string = '';
  password: string = '';
  

  public zarejestrujSie() {
     const user = {
      username: this.username,
      email: this.email,
      password: this.password
    }
    console.log(user);
    this.userService.registerUser(user).subscribe(x => 
      {this.router.navigate(['/logowanie'])})
  }

  public anuluj(): void {
    this.forma.controls.imieInazwisko.setValue(null);
    this.forma.controls.email.setValue(null);
    this.forma.controls.password.setValue(null);
    this.forma.controls.confirmPassword.setValue(null);
  }

}
