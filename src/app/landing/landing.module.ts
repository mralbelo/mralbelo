import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { BannerComponent } from './banner/banner.component';
import { LandingRoutingModule } from './landing-routing.module';
import { AboutComponent } from './about/about.component';
import { SharedModule } from "../shared/modules/shared/shared.module";
import { contactmeComponent } from './contactme/contactme.component';


@NgModule({
  imports: [
    SharedModule,
    LandingRoutingModule
  ],
  declarations: [
    LandingComponent,
    BannerComponent,
    AboutComponent,
    contactmeComponent
  ]
})
export class LandingModule { }
