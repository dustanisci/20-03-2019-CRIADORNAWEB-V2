import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';
import { TrianglesModule } from 'src/app/shared/component/triangles/triangles.module';
import { BannerModule } from 'src/app/shared/component/banner/banner.module';
import { AppRoutingModule } from 'src/app/app-routing.module';

const homeRoute = [
  { path: '', component: HomeComponent },
];

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FlexModule,
    RouterModule.forChild(homeRoute),
    TrianglesModule,
    BannerModule
  ]
})
export class HomeModule { }


