import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderModule } from './component/header/header.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TrianglesModule } from './component/triangles/triangles.module';
import { BannerComponent } from './component/banner/banner.component';

@NgModule({
  declarations: [
    FooterComponent,
    BannerComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    AppRoutingModule,
    FlexLayoutModule,
    TrianglesModule,
  ],
  exports: [
    FooterComponent,
    HeaderModule,
    TrianglesModule,
    BannerComponent
  ]
})
export class SharedModule { }
