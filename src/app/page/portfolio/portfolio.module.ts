import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio.component';
import { GalleryModule } from '@ks89/angular-modal-gallery';
import { ModalComponent } from 'src/app/shared/component/modal/modal.component';
import { PipeModule } from 'src/app/shared/pipe/pipe.module';
import { RouterModule } from '@angular/router';
import { PortfolioService } from './portfolio.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BannerComponent } from 'src/app/shared/component/banner/banner.component';
import { TrianglesModule } from 'src/app/shared/component/triangles/triangles.module';

const portfolioRoute = [
  { path: '', component: PortfolioComponent }
];

@NgModule({
  declarations: [
    PortfolioComponent,
    ModalComponent,
    BannerComponent
  ],
  imports: [
    CommonModule,
    PipeModule,
    GalleryModule,
    FlexLayoutModule,
    TrianglesModule,
    RouterModule.forChild(portfolioRoute)
  ],
  providers: [
    PortfolioService
  ]
})
export class PortfolioModule { }
