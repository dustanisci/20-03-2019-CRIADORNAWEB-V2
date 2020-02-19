import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NavbarComponent } from 'src/app/shared/component/header/navbar/navbar.component';
import { BannerModule } from 'src/app/shared/component/banner/banner.module';
import { TrianglesModule } from 'src/app/shared/component/triangles/triangles.module';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, BannerModule, TrianglesModule],
      declarations: [HomeComponent],
      providers: [NavbarComponent]
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
