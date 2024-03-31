import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import { House } from '../../types/house';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  apiurl = environment.baseUrl;


  constructor(
    private http: HttpClient,
    ) { }

  dashBoard(): Observable<House[]>{
    return this.http.get<House[]>(`${this.apiurl}dashboard`);
  }

  addHouse(formData: FormData): Observable<House> {
    return this.http.post<House>(`${this.apiurl}houses`, formData);
  }
}
