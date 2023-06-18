import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {


  public searchForma = new FormGroup({
    tutyl: new FormControl(null, { validators: [], updateOn: "change"}),
    autor: new FormControl(null, { validators: [], updateOn: "change"}),
    gatunek: new FormControl(null, {validators: [], updateOn: "change"})
  }) 

  tytul = '';
  autor = '';

  }
  

