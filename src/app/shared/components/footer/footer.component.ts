import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  footerLinks: string[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getFooterLinks();
  }

  getFooterLinks(): void {
    this.dataService.getFooterLinks().subscribe(
      (links) => {
        this.footerLinks = links;
      }
    );
  }
}
