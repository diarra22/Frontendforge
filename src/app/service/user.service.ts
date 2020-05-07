import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs'; 
import {User} from '../models/user.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService: HttpClient) { }

  public getUserAuthenticated(): Observable<User> { 
    return this.httpService.get<User>(`http://localhost:9191/users/me`)
    .pipe( map(data => new User()
    .deserialize(data))); 
  }

  public updateUserInfos(username, name, email, password): Observable<User> {
    console.log("Appel service je suis là 1");
    return this.httpService.put<User>('http://localhost:9191/users/update', 
                            { name, email, username, password })
                            .pipe(map(data => new User()
                            .deserialize(data))); 
  }

}
