import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioComponent } from './portfolio.component';
import { BannerComponent } from 'src/app/shared/component/banner/banner.component';
import { RouterTestingModule } from '@angular/router/testing';
import { TrianglesComponent } from 'src/app/shared/component/triangles/triangles.component';
import { NavbarComponent } from 'src/app/shared/component/header/navbar/navbar.component';
import { PipeModule } from 'src/app/shared/pipe/pipe.module';
import { ModalComponent } from 'src/app/shared/component/modal/modal.component';

describe('PortfolioComponent', () => {
  let component: PortfolioComponent;
  let fixture: ComponentFixture<PortfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, PipeModule],
      declarations: [ PortfolioComponent, BannerComponent, TrianglesComponent, ModalComponent ],
      providers : [NavbarComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
