import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TechnologyComponent } from './technology/technology.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from '../app-routing.module';
import { TrianglesModule } from '../shared/component/triangles/triangles.module';
import { HeaderModule } from '../shared/component/header/header.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    PortfolioComponent,
    TechnologyComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    AppRoutingModule,
    SharedModule
  ],
  exports: [
  ]
})
export class PageModule { }
