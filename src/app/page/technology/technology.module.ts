import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechnologyComponent } from './technology.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';
import { TrianglesModule } from 'src/app/shared/component/triangles/triangles.module';
import { BannerModule } from 'src/app/shared/component/banner/banner.module';

const technologyRoute = [
  { path: '', component: TechnologyComponent }
];

@NgModule({
  declarations: [
    TechnologyComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FlexModule,
    RouterModule.forChild(technologyRoute),
    TrianglesModule,
    BannerModule
  ]
})
export class TechnologyModule { }
