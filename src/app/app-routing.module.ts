import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularzComponent } from './rejestracja/formularz.component';
import { LogowanieComponent } from './logowanie/logowanie.component';
import { StopkaComponent } from './stopka/stopka.component';
import { LibraryComponent } from './library/library.component';


const routes: Routes = [
{ path: "", redirectTo: '/library', pathMatch: 'full'},
{ path: "library", component: LibraryComponent},
{ path: "rejestracja", component: FormularzComponent},
{ path: "logowanie", component: LogowanieComponent},
{ path: "stopka", component: StopkaComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
