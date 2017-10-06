import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LandingComponent } from './landing.component';
import { BannerComponent } from './banner/banner.component';



const appRoutes: Routes = [
 { path: '', component: LandingComponent },
 { path: 'banner', component: BannerComponent }

];


export const AppRoutingProviders = [];
export const LandingRoutingModule: ModuleWithProviders = RouterModule.forChild(appRoutes);
