import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegistrationComponent } from 'src/app/components/registration/registration.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(RegistrationComponent)
  }
}
