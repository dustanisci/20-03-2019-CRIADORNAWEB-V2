import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderModule } from './component/header/header.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TrianglesModule } from './component/triangles/triangles.module';
import { BannerComponent } from './component/banner/banner.component';
import { ModalComponent } from './component/modal/modal.component';
import { PipeModule } from './pipe/pipe.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BlackLinesModule } from './component/black-lines/black-lines.module';
import {GalleryModule} from '@ks89/angular-modal-gallery';


@NgModule({
  declarations: [
    FooterComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    HeaderModule
  ],
  exports: [
    HeaderModule,
    HttpClientModule,
    CommonModule,  
  ]
})
export class SharedModule { }
