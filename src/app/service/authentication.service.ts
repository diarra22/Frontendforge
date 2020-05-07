import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient) { }
  
  authenticate(username, password) {
    return this.httpClient.post<any>('http://localhost:9191/users/authenticate', { username, password }).pipe(
      map(
        userData => {
          console.log(userData);
          
          sessionStorage.setItem('username', username);
          let tokenStr ='Bearer ' + userData.accessToken ;
          sessionStorage.setItem('token', tokenStr);
          return userData;
        }
      )
    );
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    //console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }

}
