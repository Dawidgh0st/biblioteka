import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlSerializer } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BibliotekaService {
  private url = 'http://localhost:8080/register';

  constructor(private http: HttpClient) { }

  createUser(user: any): Observable<any>{
    return this.http.post<any>(`${this.url}`, user);
  }
 
  
}
