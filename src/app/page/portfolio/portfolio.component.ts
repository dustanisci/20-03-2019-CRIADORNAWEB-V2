import { Component,  ViewChild } from '@angular/core';
import { environment } from '../../../environments/environment';
import { PortfolioService } from './portfolio.service';
import { Portfolio } from 'src/app/shared/model/portfolio';
import { ModalComponent } from 'src/app/shared/component/modal/modal.component';
import { Image } from '@ks89/angular-modal-gallery';
import { Gallery } from 'src/app/shared/model/Gallery';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})

export class PortfolioComponent {

  @ViewChild(ModalComponent) 'modal': ModalComponent;
  public projects: Portfolio[] = [];
  public galleries: Gallery[] = [];


  constructor(private portfolioService: PortfolioService) {

    this.getProject();
  }


  setValuesModal(galleries: Gallery[]) {
    this.galleries = galleries;
    this.modal.images = [];

    setTimeout(() => {

      let i = 0;
      this.galleries.map(gallery => {
        this.modal.images[i] = new Image(Number(i), { img: this.galleries[i].url_galeria });
        i++;
      });

      this.modal.imagesHtmlDescriptions = this.modal.images;
      this.modal.imagesRect = this.modal.images;
      this.modal.imagesMixedSizes = this.modal.images;
      this.modal.openModalViaService(1, 0);
    }, 500);
  }

  public getProject(): void {
    this.portfolioService.getService(environment.apiPortfolio)
      .subscribe(
        result => {
          this.projects = result;
        });
  }

  public getLengthProject(portfolio) {
    return portfolio.length;
  }

}
