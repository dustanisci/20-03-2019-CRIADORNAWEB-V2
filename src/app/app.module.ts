import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PageModule } from './page/page.module';
import { SharedModule } from './shared/shared.module';
import 'hammerjs';
import 'mousetrap';
import {GalleryModule} from '@ks89/angular-modal-gallery';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    PageModule,
    SharedModule,
    GalleryModule.forRoot(),
    AppRoutingModule  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
