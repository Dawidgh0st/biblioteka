import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'http://localhost:8080/registration';
  private urlLog = 'http://localhost:8080/logowanie';


  constructor(private http: HttpClient) { }

  public registerUser(user: User): Observable<User> {
    return this.http.post<User>(this.url, user);
  }

     public login(daneUzytkownika: any): Observable<any>{
      return this.http.post(this.urlLog, daneUzytkownika)
    }


}
