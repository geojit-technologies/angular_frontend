
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PersonalDetailsService {
  private apiUrl = 'http://localhost:8080/api/personal-details'; // Replace with your actual API endpoint

  constructor(private http: HttpClient) {}

  savePersonalDetails(personalData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, personalData);
  }
}
