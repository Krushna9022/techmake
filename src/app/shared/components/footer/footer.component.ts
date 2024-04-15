import { Component, OnInit } from '@angular/core';
import { HandshakeResponse } from 'src/app/HandshakeResponse';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  footersocialLinks: HandshakeResponse | undefined

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getHandshakeResponse()
  }
  getHandshakeResponse():void{
    this.dataService.getHandshakeResponse().subscribe(
      response=>{this.footersocialLinks=response}
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
