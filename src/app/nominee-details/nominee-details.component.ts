import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NomineedetailsService } from '../services/nomineedetails.service';
import { Router } from '@angular/router';

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

  nominee_details: FormGroup;

  constructor(private fb: FormBuilder, private NomineeDetailsService: NomineedetailsService, private http: HttpClient, private router: Router) {
    this.nominee_details = this.fb.group({
      nomineename: ['', Validators.required],
      dateofbirth: ['', Validators.required],
      relationship: ['', Validators.required],
      nonominee: ['', Validators.required]

    });
  }

  ngOnInit(): void {
  }
  onChange(){
    
  }

  onSubmit() {
    console.log("submitttttt")
    if (this.nominee_details.valid) {
      let nomineeData = {
        nomineename: this.nominee_details.value.nonominee == 'false' ? this.nominee_details.value.nomineename : '',
        dateofbirth: this.nominee_details.value.nonominee == 'false' ? this.nominee_details.value.dateofbirth :'',
        relationship:this.nominee_details.value.nonominee == 'false' ? this.nominee_details.value.relationship :'',
        nonominee: this.nominee_details.value.nonominee,
      };
      console.log('Submitted nomineedata:', nomineeData);
      this.http.post("http://localhost:8080/api/nominee-details/submit", nomineeData, { responseType: 'text' }).subscribe((resultData: any) => {
        console.log(resultData, "resultData");
        localStorage.setItem('userID', resultData);
        alert("nominee details entered successfully");
      });
    }
  }
}
