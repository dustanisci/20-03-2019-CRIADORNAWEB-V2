import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LogoComponent } from './logo/logo.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { PipeModule } from '../../pipe/pipe.module';
import { ColoredLinesModule } from '../colored-lines/colored-lines.module';
import { BannerComponent } from './banner/banner.component';

@NgModule({
  declarations: [
    NavbarComponent,
    HeaderComponent,
    LogoComponent,
    BannerComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    AppRoutingModule,
    PipeModule,
    ColoredLinesModule
  ],
  providers: [
    NavbarComponent
  ],
  exports: [
    NavbarComponent,
    HeaderComponent,
    BannerComponent
  ]
})
export class HeaderModule { }
