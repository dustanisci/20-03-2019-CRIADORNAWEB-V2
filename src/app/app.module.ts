import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageModule } from './page/page.module';
import { SharedModule } from './shared/shared.module';
import { BlackLinesModule } from './shared/component/black-lines/black-lines.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';
import 'mousetrap';
import { GalleryModule } from '@ks89/angular-modal-gallery';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PageModule,
    SharedModule,
    BlackLinesModule,
    FlexLayoutModule,
    GalleryModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
