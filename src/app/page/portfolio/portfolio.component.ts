import { Component, OnInit, ViewChild } from '@angular/core';
import { environment } from '../../../environments/environment';
import { PortfolioService } from './portfolio.service';
import { Portfolio } from 'src/app/shared/model/portfolio';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})

export class PortfolioComponent {

  constructor(
    private portfolioService: PortfolioService,
    private portfolio: Portfolio) {

    this.getProject();
  }

  public getProject(): void {
    this.portfolioService.getService(environment.apiPortfolio)
      .subscribe(
        result => {
          this.portfolio = result;
        },
        error => {
          console.log(error);
        }
      );
  }

}