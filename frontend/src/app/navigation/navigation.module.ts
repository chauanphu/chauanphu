import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    NavigationComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [NavigationComponent]
})
export class NavigationModule { }
