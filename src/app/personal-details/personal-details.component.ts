
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { PersonalDetailsService } from '../services/personal-details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {
  personal_details: FormGroup;

  constructor(private fb: FormBuilder, private personalDetailsService: PersonalDetailsService, private http: HttpClient, private router: Router) {
    this.personal_details = this.fb.group({
      address: ['', Validators.required],
      dateOfBirth: [null, Validators.required],
      aadharNumber: ['', Validators.required],
      panNumber: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }






  onSubmit() {
    if (this.personal_details.valid) {
      const personalData = {
        address: this.personal_details.value.address,
        dateOfBirth: this.personal_details.value.dateOfBirth,
        aadharNumber: this.personal_details.value.aadharNumber,
        panNumber: this.personal_details.value.panNumber,
        userId: localStorage.getItem('userIDData') || ''
      };
      console.log('Submitted personalData:', personalData);
      this.personalDetailsService.savePersonalDetails(personalData).subscribe(resultData => {
        console.log(resultData, "resultData");
        localStorage.setItem('userID', resultData);
        alert("Personal details entered successfully");
        this.router.navigate(['/nominee-details']);
      });
    } else {
      alert('Please fill in all the required fields.');
    }
  }
}



// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { HttpClient } from '@angular/common/http';
// import { PersonalDetailsService } from '../services/personal-details.service';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-personal-details',
//   templateUrl: './personal-details.component.html',
//   styleUrls: ['./personal-details.component.css']
// })
// export class PersonalDetailsComponent implements OnInit {
//   personal_details: FormGroup;
//   isTermsAccepted: boolean = false;

//   constructor(private fb: FormBuilder, private personalDetailsService: PersonalDetailsService, private http: HttpClient, private router: Router) {
//     this.personal_details = this.fb.group({
//       address: ['', Validators.required],
//       dateOfBirth: [null, Validators.required],
//       aadharNumber: ['', Validators.required],
//       panNumber: ['', Validators.required],
//       acceptTerms: [false, Validators.requiredTrue]
//     });
//   }

//   ngOnInit(): void {
//   }

//   onSubmit() {
//     if (this.personal_details.valid && this.isTermsAccepted) {
//       const personalData = {
//         address: this.personal_details.value.address,
//         dateOfBirth: this.personal_details.value.dateOfBirth,
//         aadharNumber: this.personal_details.value.aadharNumber,
//         panNumber: this.personal_details.value.panNumber,
//         userId: localStorage.getItem('userIDData') || ''
//       };
//       console.log('Submitted personalData:', personalData);
//       this.personalDetailsService.savePersonalDetails(personalData).subscribe(resultData => {
//         console.log(resultData, "resultData");
//         localStorage.setItem('userID', resultData);
//         alert("Personal details entered successfully");
//         this.router.navigate(['/nominee-details']);
//       });
//     } else {
//       alert('Please fill in all the required fields and accept the terms.');
//     }
//   }

//   onTermsAccepted(accepted: boolean) {
//     this.isTermsAccepted = accepted;
//   }

//   isFormValid(): boolean {
//     return this.personal_details.valid && this.isTermsAccepted;
//   }
// }
