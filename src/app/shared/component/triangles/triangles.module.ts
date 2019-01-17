import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrianglesComponent } from './triangles.component';

@NgModule({
  declarations: [
    TrianglesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TrianglesComponent
  ]
})
export class TrianglesModule { }
