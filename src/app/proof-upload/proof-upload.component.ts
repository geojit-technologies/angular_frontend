// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-proof-upload',
//   templateUrl: './proof-upload.component.html',
//   styleUrls: ['./proof-upload.component.css']
// })
// export class ProofUploadComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import { Component } from '@angular/core';

@Component({
  selector: 'app-proof-upload',
  templateUrl: './proof-upload.component.html',
  styleUrls: ['./proof-upload.component.css']
})
export class ProofUploadComponent   {
  aadharFile: File | null = null;
  signatureFile: File | null = null;
  panFile: File | null = null;

  onFileSelect(event: any, fileType: string): void {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];

      // Update the appropriate file property based on fileType
      switch (fileType) {
        case 'aadhar':
          this.aadharFile = file;
          break;
        case 'signature':
          this.signatureFile = file;
          break;
        case 'pan':
          this.panFile = file;
          break;
        default:
          break;
      }
    }
  }

  uploadFile(fileType: string): void {
    // Implement the upload logic for the specific file type
    switch (fileType) {
      case 'aadhar':
        // Upload logic for Aadhar file
        console.log('Uploading Aadhar file:', this.aadharFile);
        break;
      case 'signature':
        // Upload logic for Signature file
        console.log('Uploading Signature file:', this.signatureFile);
        break;
      case 'pan':
        // Upload logic for PAN file
        console.log('Uploading PAN file:', this.panFile);
        break;
      default:
        break;
    }
  }

  onSubmit(): void {
    // Implement your form submission logic here
    // You can access the files using this.aadharFile, this.signatureFile, this.panFile
  }
}

