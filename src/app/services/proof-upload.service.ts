// proof-upload.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProofUpload, ProofUploadResponse } from './proof-upload.interface';

@Injectable({
  providedIn: 'root'
})
export class ProofUploadService {
  private baseUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  submitProofData(userData: ProofUpload): Observable<ProofUploadResponse> {
    const formData: FormData = new FormData();

    formData.append('userId', userData.userId.toString());
    formData.append('aadharImg', userData.aadharImg);
    formData.append('panImg', userData.panImg);
    formData.append('bankImg', userData.bankImg);

    return this.http.post<ProofUploadResponse>(`${this.baseUrl}/fileuploads`, formData);
  }
}
