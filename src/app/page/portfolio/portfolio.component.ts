import { Component, OnInit, ViewChild } from '@angular/core';
import { environment } from '../../../environments/environment';
import { PortfolioService } from './portfolio.service';
import { Portfolio } from 'src/app/shared/model/portfolio';
import { ModalComponent } from 'src/app/shared/component/modal/modal.component';
import { Image } from '@ks89/angular-modal-gallery';
import { NavbarComponent } from 'src/app/shared/component/header/navbar/navbar.component';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})

export class PortfolioComponent {

  @ViewChild(ModalComponent) 'modal' : ModalComponent;
  public projetos:Portfolio;
  gallery: Object;


  constructor(
    private portfolioService: PortfolioService,
    public navbar:NavbarComponent) {

    this.getProject();
  }


  setValuesModal(gallery: Object) {
    this.gallery = gallery;
    this.modal.images = [];
    
    setTimeout(() => {
     
    for (let i in Object.entries(this.gallery)) {
      this.modal.images[i] =
        new Image(
          parseInt(i),
          {
            img: this.gallery[i].url_galeria
          }
        )
    }
    
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
          this.projetos = result;
        },
        error => {
          console.log(error);
        }
      );
  }

}