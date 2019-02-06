import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderModule } from './component/header/header.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TrianglesModule } from './component/triangles/triangles.module';
import { BannerComponent } from './component/banner/banner.component';
import { ModalComponent } from './component/modal/modal.component';
import { GalleryModule } from '@ks89/angular-modal-gallery';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 


@NgModule({
  declarations: [
    FooterComponent,
    BannerComponent,
    ModalComponent,
  ],
  imports: [
    CommonModule,
    HeaderModule,
    AppRoutingModule,
    FlexLayoutModule,
    TrianglesModule, 
    GalleryModule,
    BrowserAnimationsModule
  ],
  exports: [
    FooterComponent,
    HeaderModule,
    TrianglesModule,
    BannerComponent,
    ModalComponent,
  ]
})
export class SharedModule { }
