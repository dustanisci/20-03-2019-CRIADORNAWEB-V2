import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { GalleryModule } from '@ks89/angular-modal-gallery';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderModule } from './shared/component/header/header.module';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';
import { FooterComponent } from './shared/component/footer/footer.component';
import { BlackLinesComponent } from './shared/component/black-lines/black-lines.component';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        AppRoutingModule,
        GalleryModule.forRoot(),
        BrowserModule,
        AppRoutingModule,
        HeaderModule,
        FlexLayoutModule,
        FlexModule,
      ],
      declarations: [
        AppComponent,
        FooterComponent,
        BlackLinesComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

});
