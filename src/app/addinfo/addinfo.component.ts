import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddinfoserviceService} from '../services/addinfoservice.service'; // Update with the actual path
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-addinfo',
  templateUrl: './addinfo.component.html',
  styleUrls: ['./addinfo.component.css']
})
export class AddinfoComponent implements OnInit {
  InvestorAnnualIncome: String="";
  CountryofBirth: String="";
  NetWorth: number | null = null;  
  SourceofIncome: String="";
  NetWorthDate: Date | null = null;
  Occupation: String = "";
  exposedperson: boolean | null = null; 
  country: boolean | null = null;

  
  additionalinfoForm: FormGroup;
  // http: any;

  constructor(private fb: FormBuilder, private AddinfoserviceService : AddinfoserviceService,private http: HttpClient,private router: Router) { 
    this.additionalinfoForm = this.fb.group({
      InvestorAnnualIncome: ['', Validators.required],
      CountryofBirth: ['', Validators.required],
      NetWorth: ['', Validators.required],
      SourceofIncome: ['', Validators.required],
      NetWorthDate: ['', Validators.required],
      Occupation: ['', Validators.required],
      exposedperson:[''],
      country:['']
    });
  }

  ngOnInit(): void {
    // this.additionalinfoForm = this.fb.group({
    //   fullName: ['', Validators.required],
    //   phonenumber: ['', Validators.required],
    //   username: ['', Validators.required],
    //   password: ['', Validators.required],
    //   confirmPassword: ['', Validators.required],
    // });
  }

  onSubmit() {
    if (this.additionalinfoForm.valid) {
      let userData = {
        annualIncome: this.additionalinfoForm.value.InvestorAnnualIncome,
        countryOfBirth: this.additionalinfoForm.value.CountryofBirth,
        netWorth: this.additionalinfoForm.value.NetWorth,
        sourceOfIncome: this.additionalinfoForm.value.SourceofIncome,
        netWorthDate: this.additionalinfoForm.value.NetWorthDate, 
        occupation: this.additionalinfoForm.value.Occupation,
        polExpPerson: this.additionalinfoForm.value.exposedperson == 'Yes' ? true : false,
        taxPayer: this.additionalinfoForm.value.country  == 'Yes' ? true : false,
        userid: localStorage.getItem('userIDData')
        
      };
      console.log('Submitted userData:', userData);
      this.http.post("http://localhost:8081/api/additional-info/save",userData,{responseType:'text'}).subscribe((resultData:any)=>
      {
        console.log(resultData);
        localStorage.setItem('userID', resultData);
        alert("User Data Submitted Successfully");
        // alert("Success");
        // this.router.navigate(['/login']);

      });
    }
  }
}
