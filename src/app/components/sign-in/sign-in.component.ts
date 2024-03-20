import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {
  constructor(private ref: MatDialogRef<SignInComponent>) { }

  close() {
    this.ref.close();
  }

  onSubmit(emailForm: NgForm) {
    if (emailForm.invalid) {
      alert('Please enter a valid email address.');
      return false;
    }
    const email = emailForm.value.email;

    return true;
  }
}
