import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})

export class LogInComponent {
  constructor(private ref: MatDialogRef<LogInComponent>) {

  }
  close() {
    this.ref.close();

  }
}
