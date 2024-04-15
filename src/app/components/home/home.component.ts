import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
import { HandshakeResponse } from 'src/app/HandshakeResponse';
import { DataService } from 'src/app/data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  handshakeResponse: HandshakeResponse | undefined;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    Aos.init();
    this.getHandshakeResponse();

  }
  getHandshakeResponse(): void {
    this.dataService.getHandshakeResponse().subscribe(
      response => {
        this.handshakeResponse = response;
      },
      error => {
        console.error('Error fetching handshake data:', error);
      }
    );
  }

}
