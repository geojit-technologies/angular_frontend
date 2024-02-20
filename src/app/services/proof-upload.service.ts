// proof-upload.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProofUploadService {
  private baseUrl = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) {}

  submitProofData(userData: any): Observable<any> {
    // const header = new HttpHeaders().set('Content-Type', 'multipart/form-data')
    // const formData: FormData = new FormData();
    // formData.append('userId', userData.userId);
    // formData.append('aadharImg', userData.aadharImg);
    // formData.append('panImg', userData.panImg);
    // formData.append('bankImg', userData.bankImg);

    return this.http.post(`${this.baseUrl}fileuploads/file`, userData);
  }
}
