import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LogoComponent } from './logo/logo.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { PipesModule } from '../../pipe/pipes.module';

@NgModule({
  declarations: [
    NavbarComponent,
    HeaderComponent,
    LogoComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    AppRoutingModule,
    PipesModule
  ],
  exports: [
    NavbarComponent,
    HeaderComponent
  ]
})
export class HeaderModule { }
