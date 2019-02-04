import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TechnologyComponent } from './technology/technology.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PortfolioService } from './portfolio/portfolio.service';
import { HttpClientModule } from '@angular/common/http';
import { Portfolio } from '../shared/model/portfolio';
import { PipeModule } from '../shared/pipe/pipe.module';

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
    SharedModule,
    HttpClientModule,
    PipeModule,
  ],
  providers: [
    PortfolioService
  ]
})
export class PageModule { }
