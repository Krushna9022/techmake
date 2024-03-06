import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegistrationComponent } from '../registration/registration.component';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],

})

export class SignInComponent implements OnInit{


  constructor(public dialog: MatDialog ) { }
  
  ngOnInit(): void {
      
  }

  openDialog(){
 
    this.dialog.open(RegistrationComponent );
    
 
  }
}

