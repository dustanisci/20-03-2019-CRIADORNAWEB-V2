import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechnologyComponent } from './technology.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BannerComponent } from 'src/app/shared/component/banner/banner.component';
import { TrianglesModule } from 'src/app/shared/component/triangles/triangles.module';

const technologyRoute = [
  { path: '', component: TechnologyComponent }
];

@NgModule({
  declarations: [
    TechnologyComponent,
    BannerComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    TrianglesModule,
    RouterModule.forChild(technologyRoute)
  ]
})
export class TechnologyModule { }
