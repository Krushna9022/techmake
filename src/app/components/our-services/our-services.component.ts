import { Component, OnInit } from '@angular/core';
import { HandshakeResponse } from 'src/app/HandshakeResponse';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.css']
})
export class OurServicesComponent implements OnInit {
  ourservice: HandshakeResponse | undefined;

  constructor(private service: DataService) { }
  ngOnInit(): void {
    this.getHandshakeResponse()
  }
  getHandshakeResponse(): void {
    this.service.getHandshakeResponse().subscribe(response => {
      this.ourservice = response;
    },
      error => {
        console.error('Error fetching handshake data:', error);
      }
    )
  }
 
}
