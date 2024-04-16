import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from 'src/app/data.service';
import { ContactUs } from '../../model/ContactUs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(private contactService: DataService,private snackBar: MatSnackBar) { }

  ngOnInit(): void {

  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      const contactData: ContactUs = {
        name: form.value.name,
        email: form.value.email,
        message: form.value.message
      };

      this.contactService.submitContactForm(contactData)
        .subscribe(
          response => {

            this.openSnackBar('message submitted successfully!');

            form.reset();
          },
          error => {
            console.error('Error submitting form:', error);
          }
        );
    } else {
      this.openSnackBar(' Please fill in all required fields.');
    }
  }

  openSnackBar(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 4000, // Duration in milliseconds
      verticalPosition: 'bottom' // Positioning the snackbar
    });
  }
}


