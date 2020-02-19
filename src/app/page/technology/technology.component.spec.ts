import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TechnologyComponent } from './technology.component';
import { RouterTestingModule } from '@angular/router/testing';
import { BannerModule } from 'src/app/shared/component/banner/banner.module';
import { TrianglesModule } from 'src/app/shared/component/triangles/triangles.module';

describe('TechnologyComponent', () => {
  let component: TechnologyComponent;
  let fixture: ComponentFixture<TechnologyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, BannerModule, TrianglesModule],
      declarations: [ TechnologyComponent],
      providers : []
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
