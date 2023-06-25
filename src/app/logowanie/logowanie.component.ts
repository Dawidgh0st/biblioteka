import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logowanie',
  templateUrl: './logowanie.component.html',
  styleUrls: ['./logowanie.component.scss']
})
export class LogowanieComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit() {
  
  }

  public logowanie = new FormGroup({
    getEmail: new FormControl(null, { validators: [] }),
    getPassword: new FormControl(null, { validators: [] })
  });

  zalogujSie() {
    if (this.logowanie.invalid)
      return;
    const daneUzytkownika = {
     email: this.logowanie.value.getEmail,
      password: this.logowanie.value.getPassword
    };
    this.userService.login(daneUzytkownika).subscribe(x => { this.router.navigate(['/user']) })
  }

}

