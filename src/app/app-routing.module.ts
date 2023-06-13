import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularzComponent } from './rejestracja/formularz.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { LogowanieComponent } from './logowanie/logowanie.component';

const routes: Routes = [
{ path: "rejestracja", component: FormularzComponent},
{ path: "kontakt", component: KontaktComponent},
{ path: "logowanie", component: LogowanieComponent},
{ path: "", redirectTo: '/books', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
