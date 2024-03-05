import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NomineedetailsService } from '../services/nomineedetails.service';
import { Router } from '@angular/router';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-nominee-details',
  templateUrl: './nominee-details.component.html',
  styleUrls: ['./nominee-details.component.css']
})
export class NomineeDetailsComponent implements OnInit {
  nomineename: String = "";
  dateofbirth: Date | null = null;
  relationship: String = "";
  nonominee: String = "";

  isChecked: boolean = false;

  nominee_details: FormGroup;

  constructor(private fb: FormBuilder, private NomineeDetailsService: NomineedetailsService, private http: HttpClient, private router: Router) {
    this.nominee_details = this.fb.group({
      nomineename: ['', [Validators.required,Validators.pattern(/^[a-zA-Z\s]+$/)]],
      dateofbirth: ['', [Validators.required,this.futureDateValidator]],
      relationship: ['', [Validators.required,Validators.pattern(/^[a-zA-Z]+$/)]],
      noNominee: [false]  // Update the form control name to 'noNominee'

    });

  }

  ngOnInit(): void {
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


  handleChange() {
    console.log('Checkbox is checked:', this.isChecked);
    if (this.isChecked == true) {
      // If 'noNominee' checkbox is checked, reset values and clear validations
      this.nominee_details.get('nomineename')?.setValue('');
      this.nominee_details.get('dateofbirth')?.setValue('');
      this.nominee_details.get('relationship')?.setValue('');
      this.nominee_details.get('nomineename')?.clearValidators();
      this.nominee_details.get('dateofbirth')?.clearValidators();
      this.nominee_details.get('relationship')?.clearValidators();
    } else {
      // If 'noNominee' checkbox is unchecked, add validations back
      this.nominee_details.get('nomineename')?.setValidators([Validators.required]);
      this.nominee_details.get('dateofbirth')?.setValidators([Validators.required]);
      this.nominee_details.get('relationship')?.setValidators([Validators.required]);
    }

    this.nominee_details.get('nomineename')?.updateValueAndValidity();
    this.nominee_details.get('dateofbirth')?.updateValueAndValidity();
    this.nominee_details.get('relationship')?.updateValueAndValidity();
    
  }

  onSubmit() {
    console.log("submitting")

    if (this.nominee_details.valid) {
      if (this.isChecked == true) {
        // If 'noNominee' checkbox is checked, reset values and clear validations
        this.nominee_details.get('nomineename')?.setValue('');
        this.nominee_details.get('dateofbirth')?.setValue('');
        this.nominee_details.get('relationship')?.setValue('');
        this.nominee_details.get('nomineename')?.clearValidators();
        this.nominee_details.get('dateofbirth')?.clearValidators();
        this.nominee_details.get('relationship')?.clearValidators();
      } else {
        // If 'noNominee' checkbox is unchecked, add validations back
        this.nominee_details.get('nomineename')?.setValidators([Validators.required]);
        this.nominee_details.get('dateofbirth')?.setValidators([Validators.required]);
        this.nominee_details.get('relationship')?.setValidators([Validators.required]);
      }

      this.nominee_details.get('nomineename')?.updateValueAndValidity();
      this.nominee_details.get('dateofbirth')?.updateValueAndValidity();
      this.nominee_details.get('relationship')?.updateValueAndValidity();


      let nomineeData = {
        nomineename: this.nominee_details.value.nomineename,
        dateofbirth: this.nominee_details.value.dateofbirth,
        relationship: this.nominee_details.value.relationship,
        nonominee: this.nominee_details.value.nonominee,


        // nomineename: this.nominee_details.value.nonominee == 'false' ? this.nominee_details.value.nomineename : '',
        // dateofbirth: this.nominee_details.value.nonominee == 'false' ? this.nominee_details.value.dateofbirth : '',
        // relationship: this.nominee_details.value.nonominee == 'false' ? this.nominee_details.value.relationship : '',
        // nonominee: this.nominee_details.value.nonominee,
        userid: localStorage.getItem('userIDData')
      };
      console.log('Submitted nomineedata:', nomineeData);
      this.http.post("http://localhost:8080/api/nominee-details/submit", nomineeData, { responseType: 'text' }).subscribe((resultData: any) => {
        console.log(resultData, "resultData");
        localStorage.setItem('userID', resultData);
        alert("nominee details entered successfully");
        this.router.navigate(['/addinfo']);
      });
      // }
    }
  }
    //Sidebar toggle show hide function
    status = false;
    addToggle()
    {
     this.status = !this.status;       
    }

    logout(){
      if (confirm("Logout Successful")){
        this.router.navigate(['/login']);
      }
    }
}
