import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    HomepageComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [HomepageComponent]
})
export class HomepageModule { }
