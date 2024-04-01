import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})

export class BannerComponent implements OnInit {
  showBanner: boolean = true;

  constructor() { }

  ngOnInit() {

    setTimeout(() => {

      this.showBanner = false;
    }, 5000);
  }

}