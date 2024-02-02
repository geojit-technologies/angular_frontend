import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NomineedetailsService {
private apiUrl = 'http://localhost:8080/api/nominee-details/submit';

nomineeData: any;

  constructor(private http: HttpClient) { 
    this.nomineeData = localStorage.getItem('userID');
  }
  submitNomineeDetails(nomineeData: any): Observable<any>{
    return this.http.post(this.apiUrl, nomineeData)
  }
}
