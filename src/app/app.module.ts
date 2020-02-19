import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderModule } from './shared/component/header/header.module';
import { FooterComponent } from './shared/component/footer/footer.component';
import { BlackLinesComponent } from './shared/component/black-lines/black-lines.component';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';
import { GalleryModule } from '@ks89/angular-modal-gallery';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    BlackLinesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    FlexLayoutModule,
    FlexModule,
    GalleryModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
