import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextCapitalizePipe } from './text-capitalize/text-capitalize.pipe';

@NgModule({
  declarations: [TextCapitalizePipe],
  exports: [TextCapitalizePipe],
  imports: [
    CommonModule
  ]
})
export class PipesModule {

  static forRoot() {
    return {
      ngModule: PipesModule,
      providers: [],
    };
  }

}
