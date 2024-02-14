import { Component } from '@angular/core';
import { ThemesService } from './services/themes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(protected theme: ThemesService) {}

  ngOnInit() {
    this.theme.set('light');
  }
}
