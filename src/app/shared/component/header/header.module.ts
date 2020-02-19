import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LogoComponent } from './logo/logo.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { PipeModule } from '../../pipe/pipe.module';
import { ColoredLinesComponent } from '../colored-lines/colored-lines.component';

@NgModule({
  declarations: [
    NavbarComponent,
    HeaderComponent,
    LogoComponent,
    ColoredLinesComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    AppRoutingModule,
    PipeModule,
  ],
  providers: [
    NavbarComponent,
  ],
  exports: [
    NavbarComponent,
    HeaderComponent
  ],
})
export class HeaderModule { }
