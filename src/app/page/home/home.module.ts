import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BannerComponent } from 'src/app/shared/component/banner/banner.component';
import { TrianglesModule } from 'src/app/shared/component/triangles/triangles.module';

const homeRoute = [
  { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    TrianglesModule,
    RouterModule.forChild(homeRoute)
  ]
})
export class HomeModule { }


