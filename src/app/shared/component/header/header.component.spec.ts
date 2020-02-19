import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { LogoComponent } from './logo/logo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ColoredLinesComponent } from '../colored-lines/colored-lines.component';
import { FlexLayoutModule } from '@angular/flex-layout';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, FlexLayoutModule],
      declarations: [HeaderComponent, LogoComponent, NavbarComponent, ColoredLinesComponent],
      providers: [NavbarComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
