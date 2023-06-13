import { Component } from '@angular/core';
import { EmailValidator, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formularz',
  templateUrl: './formularz.component.html',
  styleUrls: ['./formularz.component.scss']
})
export class FormularzComponent {
  public forma = new FormGroup({
    imieInazwisko: new FormControl(null, { validators: [], updateOn: "change" }),
    email: new FormControl(null, { validators: [Validators.email], updateOn: "change" }),
    password: new FormControl(null, { validators: [], updateOn: "change" }),
    confirmPassword: new FormControl(null, { validators: [], updateOn: "change" })
  });


  public anuluj(): void {
    this.forma.controls.imieInazwisko.setValue(null);
    this.forma.controls.email.setValue(null);
    this.forma.controls.password.setValue(null);
    this.forma.controls.confirmPassword.setValue(null);
  }

}
