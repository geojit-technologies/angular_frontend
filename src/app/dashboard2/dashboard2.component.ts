import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard2',
  templateUrl: './dashboard2.component.html',
  styleUrls: ['./dashboard2.component.css']
})
export class Dashboard2Component implements OnInit {
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

  //Sidebar toggle show hide function
  status = false;
  addToggle()
  {
   this.status = !this.status;       
  }
  

}
