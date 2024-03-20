import { Component, OnInit } from '@angular/core';
import { SignInComponent } from '../sign-in/sign-in.component';
import { MatDialog } from '@angular/material/dialog';
import { LogInComponent } from '../log-in/log-in.component';
// import { SocialAuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})

export class RegistrationComponent implements OnInit {

  // user: SocialUser | null = null;
  constructor(public dialog: MatDialog) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  openDialog1() {
    this.dialog.open(SignInComponent);
  }
  openDialog2() {
    this.dialog.open(LogInComponent);
  }
  closeDialog() {
    this.dialog.closeAll();
  }
}