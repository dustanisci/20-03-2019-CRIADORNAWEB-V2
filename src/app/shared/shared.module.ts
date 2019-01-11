import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderModule } from './component/header/header.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    FooterComponent,
  ],
  imports: [
    CommonModule,
    HeaderModule,
    AppRoutingModule,
    FlexLayoutModule
  ],
  exports: [
    FooterComponent,
    HeaderModule
  ]
})
export class SharedModule { }
