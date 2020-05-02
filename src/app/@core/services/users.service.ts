import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {



  constructor(private http: HttpClient) { }

  getUser() {
    return this.http.get<User[]>(`${environment.apiUrl}/users`)
  }

  addUser(model): Observable<any> {
    const headers = { 'content-type': 'application/json' }
    model.id = Math.floor(Math.random() * 1000);
    const body = JSON.stringify(model);
    return this.http.post(`${environment.apiUrl}/users`, body, { 'headers': headers })

  }
  updateUser(model: User): Observable<any> {
    return this.http.put<any>(`${environment.apiUrl}/users/${model.id}`, model, { 
      
      'headers': new HttpHeaders({'Content-Type': 'application/json'})
    
    })

  }

  removeUser(id): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/users/${id}`)
  }
}
