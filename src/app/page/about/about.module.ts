import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BannerComponent } from 'src/app/shared/component/banner/banner.component';
import { TrianglesModule } from 'src/app/shared/component/triangles/triangles.module';

const aboutRoute = [
  { path: '', component: AboutComponent }
];

@NgModule({
  declarations: [
    AboutComponent,
    BannerComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    TrianglesModule,
    RouterModule.forChild(aboutRoute)
  ]
})
export class AboutModule { }
