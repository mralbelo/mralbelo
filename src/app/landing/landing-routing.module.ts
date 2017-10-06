import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LandingComponent } from './landing.component';



const appRoutes: Routes = [
 { path: '', component: LandingComponent },

];


export const AppRoutingProviders = [];
export const LandingRoutingModule: ModuleWithProviders = RouterModule.forChild(appRoutes);
