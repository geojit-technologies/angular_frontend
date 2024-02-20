import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent {
  @Input() profiles: any;

  constructor(private router: Router) {}

  navigateToMembershipActivation() {
    this.router.navigate(['/membership-activation']);
  }
  
}



