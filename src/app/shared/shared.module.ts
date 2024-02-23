import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './components/banner/banner.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { MaterialModule } from './material/material/material.module';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    BannerComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule
  ],
  exports: [
    BannerComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent
  ]
})
export class SharedModule { }
