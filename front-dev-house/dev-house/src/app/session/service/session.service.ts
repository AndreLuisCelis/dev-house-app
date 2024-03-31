import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { User } from '../../types/user';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  apiurl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  login (user: User): Observable<User>{
    return this.http.post<User>(`${this.apiurl}sessions`, user)
  }

  setUser(user: User): void {
    if(user._id){
      localStorage.setItem('user_id',user._id)
    }
  }
  getUserId(){
    return localStorage.getItem('user_id');
  }
}
