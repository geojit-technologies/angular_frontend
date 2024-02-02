import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service'; // Update with the actual path
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 
  fullname: String="";
  phoneNumber: String="";
  username: String="";
  password: String="";
 
  signupForm: FormGroup = this.fb.group({
    fullName: ['', Validators.required],
    phonenumber: ['', Validators.required],
    username: ['', Validators.required],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
  }); 
  // http: any;
 
  constructor(private fb: FormBuilder, private userService: UserService,private http: HttpClient,private router:Router) { }
 
  ngOnInit(): void {
    this.signupForm = this.fb.group({
      fullName: ['', Validators.required],
      phonenumber: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }
 
  onSubmit() {
    if (this.signupForm.valid) {
      let userData = {
        userfullname: this.signupForm.value.fullName,
        phoneNumber: this.signupForm.value.phonenumber,
        userName: this.signupForm.value.username,
        password: this.signupForm.value.password
      };
      console.log('Submitted userData:', userData);
      this.http.post("http://localhost:8080/api/v1/user/save",userData,{responseType:'text'}).subscribe((resultData:any)=>
      {
        console.log(resultData);
        alert("User Registered successfully");
        this.router.navigateByUrl('/login', );
      });
 
      // this.userService.signUp(userData).subscribe(
      //   (response) => {
      //     console.log('API Response:', response);
      //   },
      //   (error) => {
      //     console.error('API Error:', error);
      //   }
      // );
 
    }
 
  }
 
 
}
 
