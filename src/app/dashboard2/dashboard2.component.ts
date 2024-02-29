import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard2',
  templateUrl: './dashboard2.component.html',
  styleUrls: ['./dashboard2.component.css']
})
export class Dashboard2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }
  
//Sidebar toggle show hide function
status = false;
addToggle()
{
  this.status = !this.status;       
}

}
