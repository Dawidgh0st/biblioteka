import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlSerializer } from '@angular/router';
import { Observable } from 'rxjs';
import { UserComponent } from './user/user.component';


@Injectable({
  providedIn: 'root'
})
export class BibliotekaService {
  private url = 'http://localhost:8080/register';

  constructor(private http: HttpClient) { }

  registerUser(user: UserComponent) {
    return this.http.post(this.url, user);
  }
 
  
}
