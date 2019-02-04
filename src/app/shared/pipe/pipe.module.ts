import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextCapitalizePipe } from './text-capitalize/text-capitalize.pipe';
import { ReversePipe } from './reverse/reverse.pipe';
import { WwwPipe } from './www/www.pipe';
import { LengthPipe } from './length/length.pipe';

@NgModule({
  declarations: [
    TextCapitalizePipe, 
    ReversePipe, 
    WwwPipe, 
    LengthPipe
  ],
  exports: [
    TextCapitalizePipe,
    ReversePipe, 
    WwwPipe, 
    LengthPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipeModule {

  static forRoot() {
    return {
      ngModule: PipeModule,
      providers: [],
    };
  }
}
