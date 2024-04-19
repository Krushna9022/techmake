import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
import { HandshakeResponse } from 'src/app/HandshakeResponse';
import { DataService } from 'src/app/data.service';
import { Blog } from 'src/app/model/Blog';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: Blog[] = [];
  handshakeResponse: HandshakeResponse | undefined;
  
  constructor(private dataService: DataService) { }
  ngOnInit(): void {
    this.getTrending();
    this.getHandshakeResponse();
    Aos.init();
  }

  getTrending(): void {
    this.dataService.getTrending(4).subscribe((res) => {
      this.data = res;
    }
    )
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

