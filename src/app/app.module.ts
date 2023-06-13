import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StopkaComponent } from './stopka/stopka.component';
import { NaglowekComponent } from './naglowek/naglowek.component';
import { FormularzComponent } from './rejestracja/formularz.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LogowanieComponent } from './logowanie/logowanie.component';

@NgModule({
  declarations: [
    AppComponent,
    StopkaComponent,
    NaglowekComponent,
    FormularzComponent,
    KontaktComponent,
    LogowanieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
