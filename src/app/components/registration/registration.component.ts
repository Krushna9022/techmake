import { Component, OnInit } from '@angular/core';
import { SignInComponent } from '../sign-in/sign-in.component';
import { MatDialog} from '@angular/material/dialog';
import { HeaderComponent } from '../../shared/components/header/header.component';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})


export class RegistrationComponent implements OnInit{


  constructor(public dialog: MatDialog ) { }
  
  ngOnInit(): void {
      
  }

  openDialog(){
 
    this.dialog.open( SignInComponent);
    
 
  }
  closeDialog(){
    this.dialog.closeAll();
  }
   
 

}

