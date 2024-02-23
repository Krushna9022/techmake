import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegistrationComponent } from 'src/app/registration/registration.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor (public dialog: MatDialog ) { }
  
  
  ngOnInit(): void {
      
  }

  openDialog(){
 
    this.dialog.open( RegistrationComponent)
  }
}
