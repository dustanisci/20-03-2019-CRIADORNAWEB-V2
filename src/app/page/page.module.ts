import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TechnologyComponent } from './technology/technology.component';
import { SharedModule } from '../shared/shared.module';
import { PortfolioService } from './portfolio/portfolio.service';
import { FormBuilder } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    PortfolioComponent,
    TechnologyComponent,
  ],
  imports: [
    SharedModule,
  ],
  providers: [
    PortfolioService,
    FormBuilder
  ]
})
export class PageModule { }
