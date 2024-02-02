import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:8080/api/v1/user'; // Update with your backend URL
 
  constructor(private http: HttpClient) {
  }
 
  signUp(userData: any): Observable<any> {
    return this.http.post(this.apiUrl, userData);
  }
}
 