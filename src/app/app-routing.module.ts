import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularzComponent } from './rejestracja/formularz.component';
import { LogowanieComponent } from './logowanie/logowanie.component';
import { StopkaComponent } from './stopka/stopka.component';
import { LibraryComponent } from './library/library.component';
import { SearchComponent } from './search/search.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
{ path: "", redirectTo: '/library', pathMatch: 'full'},
{ path: "library", component: LibraryComponent},
{ path: "registration", component: FormularzComponent},
{ path: "logowanie", component: LogowanieComponent},
{ path: "stopka", component: StopkaComponent},
{ path: "search", component: SearchComponent},
{ path: "user", component: UserComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
