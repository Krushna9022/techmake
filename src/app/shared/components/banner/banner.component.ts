import { Component, OnInit } from '@angular/core';
import { HandshakeResponse } from 'src/app/HandshakeResponse';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})

export class BannerComponent implements OnInit {
  showBanner: boolean = true;
  banner:HandshakeResponse | undefined
  constructor(private bannerservice:DataService) { }

  ngOnInit() {
    this.getHandshakeResponse();
    setTimeout(() => {

      this.showBanner = true;
    }, 5000);
  }
   getHandshakeResponse():void{
    this.bannerservice.getHandshakeResponse().subscribe(
      response=>{
        this.banner=response
      },
      error=>console.log("error",error)
    )
  }

}