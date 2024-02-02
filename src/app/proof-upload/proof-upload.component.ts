import { HttpClient } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-proof-upload',
  templateUrl: './proof-upload.component.html',
  styleUrls: ['./proof-upload.component.css']
})
export class ProofUploadComponent implements OnInit{
  AadharImage: string="";
PANImage: string=""; 
BankImage: string=""; 
  uploadForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.uploadForm = this.fb.group({
      userId: [null, [Validators.required]],
      aadharImg: [null, [Validators.required]],
      panImg: [null, [Validators.required]],
      bankImg: [null, [Validators.required]]
    });
  }

  ngOnInit() {
    // this.uploadForm = this.fb.group({
    //   userId: [null, [Validators.required]],
    //   aadharImg: [null, [Validators.required]],
    //   panImg: [null, [Validators.required]],
    //   bankImg: [null, [Validators.required]]
    // });
  }

  onFileChange(event: any, type: string) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadForm.get(type)?.setValue(file);
    }
  }
  // onFileChange(event: any, type: string) {
  //   if (event.target.files.length > 0) {
  //     const file = event.target.files[0];
      
  //     // Example: Assuming you want to store the file content as a base64 string
  //     this.getBase64(file).then((base64String: string) => {
  //       this.uploadForm.get(type).patchValue(base64String);
  //     });
  //   }
  // }
  
  // // Helper method to convert a file to a base64-encoded string
  // getBase64(file: any): Promise<string> {
  //   return new Promise((resolve, reject) => {
  //     const reader = new FileReader();
  //     reader.readAsDataURL(file);
  //     reader.onload = () => resolve(reader.result?.toString() || '');
  //     reader.onerror = (error) => reject(error);
  //   });
  // }

onSubmit() {
  if(this.uploadForm.valid){
    // let userId = this.uploadForm.value.userId;
    let userData={
      aadharimg:this.uploadForm.value.AadharImage,
      panimg:this.uploadForm.value.panImg,
      bankimg:this.uploadForm.value.bankImg,
    };
    console.log('Submitted userData:',userData);
    this.http.post("http://localhost:8080/api/fileuploads", userData, { responseType: 'text' }).subscribe((resultData:any)=>
    {
      console.log(resultData,"resultData");
        localStorage.setItem('userID', resultData);
        alert("bank details entered successfully");
    });
    
    }
  }
}