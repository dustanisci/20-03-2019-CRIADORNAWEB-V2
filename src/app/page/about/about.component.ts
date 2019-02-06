import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Animations, Opacity } from 'src/app/shared/model/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [ Opacity ]
})
export class AboutComponent extends Animations implements OnInit{
  
  constructor(private el: ElementRef) {
    super();
   }

  @HostListener('window:scroll', ['$event'])

  public checkScrollFather() {
    this.checkScroll(this.el.nativeElement.offsetTop, window.pageYOffset);
  }

  ngOnInit(){
    this.checkOpenComponent(this.el.nativeElement.offsetTop);
  }
  
}