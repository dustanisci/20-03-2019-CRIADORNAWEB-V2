import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { RouterTestingModule } from '@angular/router/testing';
import { BannerModule } from 'src/app/shared/component/banner/banner.module';
import { TrianglesModule } from 'src/app/shared/component/triangles/triangles.module';
import { By } from '@angular/platform-browser';
import { ContactComponent } from '../contact/contact.component';
import { Router } from '@angular/router';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BannerModule,
        TrianglesModule,
        RouterTestingModule
      ],
      declarations: [HomeComponent, ContactComponent],
      providers: []
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should I check the size of the array', () => {
    expect(component.items).toBeDefined();
  });

  it('should have 4 or more', () => {
    expect(component.items.length).toBeGreaterThanOrEqual(4);
  });

});
