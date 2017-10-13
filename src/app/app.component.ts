import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { BannerComponent } from './landing/banner/banner.component';
import { LandingRoutingModule } from './landing/landing-routing.module';
import { AboutComponent } from './landing/about/about.component';
import { SharedModule } from "./shared/modules/shared/shared.module";
import { GalleryComponent } from './gallery/gallery.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AppComponent';
}
