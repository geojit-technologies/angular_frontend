// src/app/services/bank-details-api.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BankDetailsService {
  private apiUrl = 'http://localhost:8080/api/v1/bank/save'; // Replace with your actual API endpoint

  bankData: any;

  constructor(private http: HttpClient) {
    this.bankData = localStorage.getItem('userID');
  }

  saveBankDetails(bankData: any): Observable<any> {
    return this.http.post(this.apiUrl, bankData);
  }
}
