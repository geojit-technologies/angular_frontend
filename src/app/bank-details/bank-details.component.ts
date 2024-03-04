import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BankDetailsService } from '../services/bank-details.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
  styleUrls: ['./bank-details.component.css']
})
export class BankDetailsComponent implements OnInit {
  accountType: String="";
  accountNumber: String="";
  ifscCode: String="";

  bank_details: FormGroup;

  maxAccountNumberLength: number = 10; // Set your desired maximum length
  maxIfscCodeLength: number = 15; // Set your desired maximum length


  constructor(private fb: FormBuilder,private BankDetailsService: BankDetailsService, private http: HttpClient) {
    this.bank_details = this.fb.group({
      accountType: ['', Validators.required],
      accountNumber: ['', [Validators.required, Validators.pattern(/^\d+$/), Validators.minLength(8)]],
      ifscCode: ['', [Validators.required, Validators.pattern(/^[A-Za-z0-9]+$/), Validators.minLength(11)]],
    });
   }

   

// Method to check if the Account Number input should be disabled
isAccountNumberDisabled(): boolean {
  return this.bank_details.get('accountNumber')!.value.length >= this.maxAccountNumberLength;
}

// Method to check if the IFSC Code input should be disabled
isIfscCodeDisabled(): boolean {
  return this.bank_details.get('ifscCode')!.value.length >= this.maxIfscCodeLength;
}

  ngOnInit(): void {
  

  }

  //Sidebar toggle show hide function
status = false;
addToggle()
{
  this.status = !this.status;       
}


  

  onSubmit() {
    // Handle form submission logic
    if (this.bank_details.valid) {
      let bankdata = {
        acctype: this.bank_details.value.accountType,
        accno: this.bank_details.value.accountNumber,
        ifsccode: this.bank_details.value.ifscCode,
        userid: localStorage.getItem('userIDData')
      };
      console.log('Submitted bankdata:', bankdata);
      this.http.post("http://localhost:8080/api/v1/bank/save", bankdata, { responseType: 'text' }).subscribe((resultData: any) => {
        console.log(resultData, "resultData");
        localStorage.setItem('userID', resultData);
        alert("bank details entered successfully");
      });
    } else {
      // Display an alert indicating that required fields must be entered
      alert('Please fill in all the required fields.');
    }
  }

  onClear() {
    this.bank_details.reset();
  }
  
}
