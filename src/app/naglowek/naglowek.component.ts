import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-naglowek',
  templateUrl: './naglowek.component.html',
  styleUrls: ['./naglowek.component.scss']
})
export class NaglowekComponent {

  constructor(private router: Router) {}

public przekierowanieNaGlowna(){
  this.router.navigate(['/library']);
  }
}
