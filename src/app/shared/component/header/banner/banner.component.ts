import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  public adjustedHeight: number = 0;
  public urlImage: string;
  @ViewChild('banner') elementView: ElementRef;

  constructor() { }

  ngOnInit() {
    this.adjustBanner();
  }

  public adjustBanner(): void {
    if (window.innerWidth < 680) {
      this.adjustedHeight = 130;
    } else if (window.innerWidth < 1280) {
      this.adjustedHeight = 220;
    } else {
      this.adjustedHeight = (this.elementView.nativeElement.scrollWidth * 379) / 2000;
    }
  }

}
