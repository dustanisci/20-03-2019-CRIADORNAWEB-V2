import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { Animations, Opacity } from 'src/app/shared/model/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations : [ Opacity ]
})
export class HomeComponent extends Animations implements OnInit {

  constructor(public el: ElementRef) {
    super();
   }

   @HostListener('window:scroll', ['$event'])

   public checkScrollFather() {
    const componentPosition = this.el.nativeElement.offsetTop
     console.log(componentPosition);
     this.checkScroll(this.el.nativeElement.offsetTop, window.pageYOffset);
   }
 
   ngOnInit(){
     this.checkOpenComponent(this.el.nativeElement.offsetTop);
   }


}