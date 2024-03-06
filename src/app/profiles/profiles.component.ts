import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent {
  @Input() profiles: any;
  username: any;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.username = params.get('username');
      console.log('Username:', this.username);
    
    });
  }

  navigateToMembershipActivation() {
    this.router.navigate(['/membership-activation']);
  }

  // Sidebar toggle show hide function
  status = false;

  addToggle() {
    this.status = !this.status;
  }
  private getUserData(username: string) {
    // Assuming you have a method to retrieve user data based on the username
    // You can set this.user based on your data retrieval logic
    // Example: this.user = userService.getUserByUsername(username);
  }
}

