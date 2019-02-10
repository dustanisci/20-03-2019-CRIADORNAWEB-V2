import { TestBed } from '@angular/core/testing';

import { PortfolioService } from './portfolio.service';
import { HttpClientModule } from '@angular/common/http';

describe('PortfolioService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
    providers: [PortfolioService, HttpClientModule]
  }));

  it('should be created', () => {
    const service: PortfolioService = TestBed.get(PortfolioService);
    expect(service).toBeTruthy();
  });
});
