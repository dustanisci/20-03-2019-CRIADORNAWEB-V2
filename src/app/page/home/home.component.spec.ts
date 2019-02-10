import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { BannerComponent } from 'src/app/shared/component/banner/banner.component';
import { RouterTestingModule } from '@angular/router/testing';
import { TrianglesComponent } from 'src/app/shared/component/triangles/triangles.component';
import { NavbarComponent } from 'src/app/shared/component/header/navbar/navbar.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ HomeComponent, BannerComponent, TrianglesComponent ],
      providers : [NavbarComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
