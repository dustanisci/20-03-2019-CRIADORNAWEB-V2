import { async, ComponentFixture, TestBed } from '@angular/core/testing';
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
import { Portfolio } from 'src/app/shared/model/portfolio';

describe('PortfolioComponent', () => {
  let component: PortfolioComponent;
  let fixture: ComponentFixture<PortfolioComponent>;
  let service: PortfolioService;

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
    service = TestBed.inject(PortfolioService);
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should check request/response', async (done) => {
    await service.getProjects().subscribe(() => {
      expect(true).toBeTrue();
    }, () => {
      expect(false).toBeTrue();
    }, () => {
      done();
    });
  });


  it('should receive at least one project', async (done) => {
    await service.getProjects().subscribe((res: Portfolio[]) => {
      expect(res.length).toBeGreaterThan(0);
    }, () => {
      expect(false).toBeTrue();
    }, () => {
      done();
    });
  });


  it('should receive at least one photo in each gallery', async (done) => {
    await service.getProjects().subscribe((res: Portfolio[]) => {
      res.map(project => {
        if (!project.galerias.length) {
          expect(false).toBeTrue();
        }
      });
      expect(true).toBeTrue();
    }, () => {
      expect(false).toBeTrue();
    }, () => {
      done();
    });
  });


  it('should receive an empty array and not undefined', async (done) => {
    service.getProjects().subscribe((res: Portfolio[]) => {
      expect(res ? true : false).toBeTrue();
    }, () => {
      expect(false).toBeTrue();
    }, () => {
      done();
    });
  });

});
