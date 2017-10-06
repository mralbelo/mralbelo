import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { BannerComponent } from './banner/banner.component';
import { LandingRoutingModule } from './landing-routing.module';


@NgModule({
  imports: [
    CommonModule,
    LandingRoutingModule
    
  ],
  declarations: [
    LandingComponent,
    BannerComponent,
  ]
})
export class LandingModule { }
