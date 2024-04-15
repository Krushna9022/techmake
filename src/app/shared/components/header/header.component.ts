import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HandshakeResponse } from 'src/app/HandshakeResponse';
import { RegistrationComponent } from 'src/app/components/registration/registration.component';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  socialmedialink: HandshakeResponse | undefined
  
  constructor(public dialog: MatDialog, private socialmedia: DataService) { }
  
  ngOnInit(): void {
    this.getHandshakeResponse()
  }
  openDialog() {
    this.dialog.open(RegistrationComponent)
  }
  getHandshakeResponse(): void {
    this.socialmedia.getHandshakeResponse().subscribe(
      response => {
        this.socialmedialink=response;
      }
    )
  }

  getSocialMediaIcon(link: string): string {
    switch (link.toLowerCase()) {
      case 'facebook.com':
        return 'facebook-f';
      case 'instagram.com':
        return 'instagram';
      case 'twitter.com':
        return 'twitter';
      case 'youtube.com':
        return 'youtube';
      default:
        return '';
    }
  }
}
