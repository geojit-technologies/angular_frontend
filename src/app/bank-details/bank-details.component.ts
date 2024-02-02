import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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


  constructor(private fb: FormBuilder,private BankDetailsService: BankDetailsService, private http: HttpClient) {
    this.bank_details = this.fb.group({
      accountType: ['', Validators.required],
      accountNumber: ['', [Validators.required, Validators.pattern(/^[0-9]+$/), Validators.minLength(8)]],
      ifscCode: ['', [Validators.required, Validators.pattern(/^[A-Za-z0-9]+$/), Validators.minLength(11)]],
    });
   }

  ngOnInit(): void {
  

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
      this.http.post("http://localhost:8080/api/v1/bank/save",bankdata,{responseType:'text'}).subscribe((resultData:any)=>
      {
        console.log(resultData,"resultData");
        localStorage.setItem('userID', resultData);
        alert("bank details entered successfully");
      });

}

}
}
