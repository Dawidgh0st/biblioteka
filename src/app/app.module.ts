import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StopkaComponent } from './stopka/stopka.component';
import { NaglowekComponent } from './naglowek/naglowek.component';
import { FormularzComponent } from './rejestracja/formularz.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LogowanieComponent } from './logowanie/logowanie.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { UserComponent } from './user/user.component';
import { LibraryComponent } from './library/library.component';

@NgModule({
  declarations: [
    AppComponent,
    StopkaComponent,
    NaglowekComponent,
    FormularzComponent,
    LogowanieComponent,
    UserComponent,
    LibraryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [FormularzComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
