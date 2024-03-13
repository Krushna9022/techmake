import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})

export class BannerComponent implements OnInit {
  bannerLinks: string[] = [];
  showBanner: boolean = true; // Assuming you want to show the banner by default

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getBannerLinks();
  }

  getBannerLinks(): void {
    this.dataService.getBannerLinks().subscribe(
      (links) => {
        this.bannerLinks = links;
      }     
    );
  }

}