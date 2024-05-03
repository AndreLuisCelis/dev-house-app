import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { User } from '../../types/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  apiurl = environment.baseUrl;
  currentUser$ = new BehaviorSubject<User | null | undefined>(undefined);
  currentUser: User = { _id:'', email:''};

  constructor(
    private http: HttpClient,
    private router: Router) { }

  login (user: User): Observable<User>{
    return this.http.post<User>(`${this.apiurl}sessions`, user)
  }

  setUser(user: User): User {
    if(user._id){
      localStorage.setItem('user_id',user._id);
      localStorage.setItem('user_email', user.email)
      this.currentUser$.next(user);
    }
    return user
  }
  getUserId(){
    return localStorage.getItem('user_id');
  }

  getUserEmail(){
    return localStorage.getItem('user_email');
  }
  getCurrentUser(): User {
    const currentUser: User = {
      _id: this.getUserId()??'',
      email: this.getUserEmail()??''
    }
    return currentUser
  }

 async logout(): Promise<boolean> {
    localStorage.removeItem('user_id');
    localStorage.removeItem('user_email');
    this.currentUser$.next(null);
    return this.router.navigateByUrl('');
  }
}
