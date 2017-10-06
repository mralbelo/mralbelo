import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';


const appRoutes: Routes = [
 { path: '', loadChildren: 'app/landing/landing.module#LandingModule' },
 { path: '**', component: PageNotFoundComponent }
];


export const AppRoutingProviders = [];
export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(appRoutes, {
  useHash: true
});