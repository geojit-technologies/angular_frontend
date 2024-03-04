  import { Component, OnInit } from '@angular/core';
  import { FormBuilder, FormGroup, Validators } from '@angular/forms';
  import { AddinfoserviceService} from '../services/addinfoservice.service'; // Update with the actual path
  import { HttpClient } from '@angular/common/http';
  import { Router } from '@angular/router'; 
  import { AbstractControl } from '@angular/forms';

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
    isCheckboxChecked: boolean = false;
    // http: any;

    constructor(private fb: FormBuilder, private AddinfoserviceService : AddinfoserviceService,private http: HttpClient,private router: Router) { 
      this.additionalinfoForm = this.fb.group({
        InvestorAnnualIncome: ['', [Validators.required,Validators.pattern(/^[0-9]+$/)]],
        CountryofBirth: ['', [Validators.required,Validators.pattern(/^[a-zA-Z]+$/)]],
        NetWorth: ['', [Validators.required,Validators.pattern(/^[0-9]+$/)]],
        SourceofIncome: ['', [Validators.required,Validators.pattern(/^[a-zA-Z]+$/)]],
        NetWorthDate: ['', [Validators.required,this.futureDateValidator]],
        Occupation: ['', [Validators.required,Validators.pattern(/^[a-zA-Z]+$/)]],
        exposedperson:['',Validators.required],
        country:['',Validators.required],
        declaration: [false, Validators.requiredTrue]
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
    clearErrorMessage(controlName: string): void {
      if (this.additionalinfoForm.get(controlName)?.invalid) {
        this.additionalinfoForm.controls[controlName].setErrors(null);
      }
    }
  
    isErrorMessageVisible(controlName: string): boolean {
      const control = this.additionalinfoForm.get(controlName);
      return control ? control.dirty || control.touched : false;
    }

    futureDateValidator(control: AbstractControl): { [key: string]: any } | null {
      const selectedDate = new Date(control.value);
      const today = new Date();
  
      // Check if the selected date is in the future
      if (selectedDate > today) {
        return { futureDate: true };
      }
      return null;
    }

    onCheckboxChange() {
      this.isCheckboxChecked = !this.isCheckboxChecked;
    
      // Enable or disable the submit button based on the checkbox status
      const declarationControl = this.additionalinfoForm.get('declaration');
      
      if (declarationControl) { // Check if the control is not null
        if (this.isCheckboxChecked) {
          declarationControl.setValidators(Validators.requiredTrue);
        } else {
          declarationControl.clearValidators();
        }
        
        declarationControl.updateValueAndValidity();
      }
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
        this.http.post("http://localhost:8080/api/additional-info/save",userData,{responseType:'text'}).subscribe((resultData:any)=>
        {
          console.log(resultData);
          localStorage.setItem('userID', resultData);
          alert("User Data Submitted Successfully");
          // alert("Success");
          // this.router.navigate(['/login']);
        });
      }
      else {
        // Display a pop-up message for incomplete fields
        alert("Please fill in all required fields.");
      }
    }
      //Sidebar toggle show hide function
  status = false;
  addToggle()
  {
   this.status = !this.status;       
  }
  }
