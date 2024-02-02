import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddinfoserviceService {
    private apiUrl = 'http://localhost:8081/api/additional-info'; 
    addData :any;
  
    constructor(private http: HttpClient) {
      this.addData=localStorage.getItem('userID');
    }
  
    saveAddInfo(addData: any): Observable<any> {
      return this.http.post(this.apiUrl, addData);
    }
  }