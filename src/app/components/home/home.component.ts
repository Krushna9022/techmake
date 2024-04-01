import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
import { DataService } from 'src/app/data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data: any;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    Aos.init();

    this.dataService.getCategory().subscribe(
      (data) => {

        this.data = data;
        console.log(data);
      },

    );
  }
}
