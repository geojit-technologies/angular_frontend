import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ProofUploadService } from '../services/proof-upload.service';

@Component({
  selector: 'app-proof-upload',
  templateUrl: './proof-upload.component.html',
  styleUrls: ['./proof-upload.component.css']
})
export class ProofUploadComponent implements OnInit {
  uploadForm: FormGroup;
  aadharImgBase64image: any;
  panImgBase64image: any;
  bankImgBase64image: any;
  maxFileSize: number = 5 * 1024 * 1024; // 5MB

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private ProofUploadService: ProofUploadService,
    private router: Router
  ) {}

  ngOnInit() {
    this.uploadForm = this.fb.group({
      userId: ["", [Validators.required]],
      aadharImg: ["", [Validators.required, Validators.pattern(/^(?=.*\.(jpe?g|png)$)/)]],
      panImg: ["", [Validators.required, Validators.pattern(/^(?=.*\.(jpe?g|png)$)/)]],
      bankImg: ["", [Validators.required, Validators.pattern(/^(?=.*\.(jpe?g|png)$)/)]],
    });
  }
  handleUpload(event: any, type: string) {
    const file = event.target.files[0];
    const fileType = file.type; // Get the file type

    if (file.size > this.maxFileSize) {
      this.uploadForm.get(type).setErrors({ 'maxSize': true });
      return;
    }

    if (fileType !== 'image/jpeg' && fileType !== 'image/png') {
      this.uploadForm.get(type).setErrors({ 'invalidType': true });
      return;
    }
    
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      if (type === "aadharImg") {
        this.aadharImgBase64image = reader.result;
      } else if (type === "panImg") {
        this.panImgBase64image = reader.result;
      } else if (type === "bankImg") {
        this.bankImgBase64image = reader.result;
      }
    };
  }

  onFileChange(event: any, type: string) {
    console.log(event.target.files, "event.target.file")
    if (event.target.files.length > 0) {
      this.handleUpload(event, type);
    }
  }

  onSubmit() {
    this.uploadForm.get('aadharImg').setValue(this.aadharImgBase64image);
    this.uploadForm.get('panImg').setValue(this.panImgBase64image);
    this.uploadForm.get('bankImg').setValue(this.bankImgBase64image);

    let userData = {
      aadharimg: this.uploadForm.value.aadharImg,
      panimg: this.uploadForm.value.panImg,
      bankimg: this.uploadForm.value.bankImg,
      userid: localStorage.getItem('userIDData')
    };
    console.log('Submitted userData:', userData);
    
    this.ProofUploadService.submitProofData(userData).subscribe((data) => {
      console.log(data, "data123456");
      alert("proof Details uploaded successfully");
    });
  }
  //Sidebar toggle show hide function
  // status = false;
  // addToggle()
  // {
  //  this.status = !this.status;       
  // }
  logout() {
    // Add any additional logout logic here
    // For example, clearing local storage, session storage, etc.
    if (confirm("Logout Successful.")) {
    // Navigate to the login page
    this.router.navigate(['/login']); // Replace '/login' with the actual route to your login page
  }
  }

}
