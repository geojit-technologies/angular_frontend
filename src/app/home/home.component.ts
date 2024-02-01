import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
 
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  username: any;
 
  constructor(private route: ActivatedRoute,private router: Router) {
    // this.route.paramMap.subscribe(params => {
    //   this.username = params.get('username');
    //   console.log('Username:', this.username);
    // });
  }
 
 
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.username = params.get('username');
      console.log('Username:', this.username);
    });
  }
 
  logout() {
   
    console.log('User logged out');
    this.router.navigateByUrl('/login', );
  }
 
}