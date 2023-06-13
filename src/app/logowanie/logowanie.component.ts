import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-logowanie',
  templateUrl: './logowanie.component.html',
  styleUrls: ['./logowanie.component.scss']
})
export class LogowanieComponent {
  public logowanie = new FormGroup({
    getEmail: new FormControl(null, {validators: []}),
    getPassword: new FormControl(null, {validators: []})
  });

}
