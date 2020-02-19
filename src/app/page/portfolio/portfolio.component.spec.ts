import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { PortfolioComponent } from './portfolio.component';
import { RouterTestingModule } from '@angular/router/testing';
import { PipeModule } from 'src/app/shared/pipe/pipe.module';
import { GalleryModule } from '@ks89/angular-modal-gallery';
import { PortfolioService } from './portfolio.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';
import { TrianglesModule } from 'src/app/shared/component/triangles/triangles.module';
import { BannerModule } from 'src/app/shared/component/banner/banner.module';
import { environment } from 'src/environments/environment';

describe('PortfolioComponent', () => {
  let component: PortfolioComponent;
  let fixture: ComponentFixture<PortfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        CommonModule,
        PipeModule,
        GalleryModule.forRoot(),
        FlexLayoutModule,
        FlexModule,
        HttpClientModule,
        TrianglesModule,
        BannerModule
      ],
      declarations: [PortfolioComponent],
      providers: [PortfolioService, HttpClientModule]
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

  it('should check that the gallery is not empty', async(inject([PortfolioService], (portfolioService) => {
    portfolioService.getService(environment.apiPortfolio).subscribe((project) => {
      expect(project.length).toBeGreaterThanOrEqual(1);
    });
  })));

  it('should check that the project is not empty', () => {

  });
});
