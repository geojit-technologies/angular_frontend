import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service'; // Update with the actual path
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BxUser } from 'boxicons';
 
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
 
  username: String="";
  password: String="";
 
  signinForm: FormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  }); 
 
  constructor(private fb: FormBuilder, private userService: UserService,private http: HttpClient,private router:Router) { }
 
 
 
  ngOnInit(): void {
    this.signinForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
 
  login(){
    if (this.signinForm.valid) {
      let userData = {
        username: this.signinForm.value.username,
        password: this.signinForm.value.password
      };
      console.log('Submitted loginData:', userData);
      this.http.post("http://localhost:8080/api/v1/user/login",userData).subscribe((resultData:any)=>
      {
        console.log(resultData);
        if (resultData.message=="Email not exits")
        {
          alert("Email not exits");
        }
        else if(resultData.message=="Login Success")
        {
          localStorage.setItem('userIDData',resultData.userID)
          console.log(this.signinForm.value.username,"this.signinForm.value.username")
          this.router.navigate(['/dashboard2', {username: resultData.name}]);
        }
        else{
          alert("incorrect email and password not match")
        }
      });
  } 
  }
 
}
 