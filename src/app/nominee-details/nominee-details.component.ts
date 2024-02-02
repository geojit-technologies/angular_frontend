import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NomineedetailsService } from '../services/nomineedetails.service';

@Component({
  selector: 'app-nominee-details',
  templateUrl: './nominee-details.component.html',
  styleUrls: ['./nominee-details.component.css']
})
export class NomineeDetailsComponent implements OnInit {
   nomineename: String="";
   dateofbirth: Date | null =null;
   relationship: String="";
  //  nonominee:;

   nominee_details: FormGroup;

  constructor(private fb: FormBuilder, private NomineeDetailsService: NomineedetailsService, private http: HttpClient) { 
    this.nominee_details = this.fb.group({
      nomineename: ['', Validators.required],
      dateofbirth: ['', Validators.required],
      relationship:['', Validators.required],
      nonominee: ['', Validators.required]

    });
  }

  ngOnInit(): void {
  }

   onSubmit(){
    if(this.nominee_details.valid){
      let nomineeData={
        nomineename: this.nominee_details.value.nomineename,
        dateofbirth: this.nominee_details.value.dateofbirth,
        relationship: this.nominee_details.value.relationship,
        nonominee:this.nominee_details.value.nonominee,
      };
      console.log('Submitted nomineedata:', nomineeData);
      this.http.post("http://localhost:8080/api/nominee-details/submit", nomineeData,{responseType:'text'}).subscribe((resultData:any)=>
      {
        console.log(resultData,"resultData");
        localStorage.setItem('userID',resultData);
        alert("nominee details entered successfully");
      });
    }
   }
}
