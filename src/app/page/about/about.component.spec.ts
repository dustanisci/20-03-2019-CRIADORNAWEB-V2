import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NavbarComponent } from 'src/app/shared/component/header/navbar/navbar.component';
import { BannerModule } from 'src/app/shared/component/banner/banner.module';
import { TrianglesModule } from 'src/app/shared/component/triangles/triangles.module';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, BannerModule, TrianglesModule],
      declarations: [ AboutComponent ],
      providers : [NavbarComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
