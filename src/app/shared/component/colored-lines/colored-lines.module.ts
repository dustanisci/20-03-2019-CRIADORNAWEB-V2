import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColoredLinesComponent } from './colored-lines.component';

@NgModule({
  declarations: [
    ColoredLinesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ColoredLinesComponent]
})
export class ColoredLinesModule { }
