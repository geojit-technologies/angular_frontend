import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-membership-activation',
  templateUrl: './membership-activation.component.html',
  styleUrls: ['./membership-activation.component.css']
})
export class MembershipActivationComponent {

  membershipForm: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.membershipForm = this.formBuilder.group({
      physicalMembership: [false, Validators.required],
      dematMembership: [false, Validators.required],
      declarationOne: [false, Validators.required],
      declarationTwo: [false, Validators.required]
    });
  }

  submitForm() {
    if (this.membershipForm.valid && this.areDeclarationsChecked()) {
      // Perform submission logic here
      console.log('Form submitted successfully!');
      alert('Both declaration checkboxes are checked!');
      // You can show a success message or navigate to another page
    } else {
      alert('Please check all checkboxes before submitting.');
    }
    this.router.navigate(['/home']);
  }
  

  areDeclarationsChecked(): boolean {
    const declarationOneControl = this.membershipForm.get('declarationOne');
    const declarationTwoControl = this.membershipForm.get('declarationTwo');

    return declarationOneControl !== null && declarationTwoControl !== null &&
           declarationOneControl.value && declarationTwoControl.value;
  }
  //Sidebar toggle show hide function
  status = false;
  addToggle()
  {
   this.status = !this.status;       
  }
}




