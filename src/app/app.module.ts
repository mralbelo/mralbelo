import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './shared/components/navigation/navigation.component';NgModule
import { LandingComponent } from './landing/landing.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component'; 
import { LandingModule } from './landing/landing.module';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/modules/shared/shared.module';
import { GalleryComponent } from './gallery/gallery.component';

// NgModule


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LandingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
