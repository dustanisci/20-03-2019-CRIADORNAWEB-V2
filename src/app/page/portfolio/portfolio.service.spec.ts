import { TestBed } from '@angular/core/testing';

import { PortfolioService } from './portfolio.service';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

describe('PortfolioService', () => {
  let service: PortfolioService;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
    providers: [PortfolioService, HttpClientModule]
  }));


  beforeEach(() => {
    service = TestBed.inject(PortfolioService);
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('should test the method return', () => {
    expect(service.getProjects()).toEqual(jasmine.any(Observable));
  });


});
