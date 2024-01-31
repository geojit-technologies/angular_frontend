// src/app/profile/profile.component.ts

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent {
  @Input() profiles: any;

  toggleActiveMember() {
    if (this.profiles) {
      this.profiles.activeMembership = (this.profiles.activeMembership === 'physical') ? 'demat' : 'physical';
    }
  }
}


