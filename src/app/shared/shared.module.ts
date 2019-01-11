import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderModule } from './component/header/header.module';
import { PipesModule } from './pipe/pipes.module';

@NgModule({
  declarations: [
    FooterComponent,
  ],
  imports: [
    CommonModule,
    HeaderModule,
    AppRoutingModule,
    PipesModule
  ],
  exports: [
    FooterComponent,
    HeaderModule,
    PipesModule
  ]
})
export class SharedModule { }
