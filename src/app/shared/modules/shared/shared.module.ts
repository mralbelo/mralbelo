import { GalleryComponent } from '../../../gallery/gallery.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from '../../components/navigation/navigation.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    FormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    NgbModule,
    GalleryComponent,
    NavigationComponent
  ],
  
  declarations: [
    NavigationComponent,
    GalleryComponent
  ]
})
export class SharedModule { }
