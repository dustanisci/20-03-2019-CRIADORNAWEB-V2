import { Component, OnInit, ViewChild, ElementRef, Input, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {

  @Input() urlImage: string;
  @Input() linkPage: string;

  constructor() { 
    
  }

}
