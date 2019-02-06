import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger('scrollAnimation', [
      state('show', style({
        opacity: 1,
        transform: "translateX(0)"
      })),
      state('hide', style({
        opacity: 0,
        transform: "translateX(-100%)"
      })),
      transition('show => hide', animate('700ms ease-out')),
      transition('hide => show', animate('700ms ease-in'))
    ])
  ]
})
export class AboutComponent implements OnInit{
  public state = "hide";
  constructor(private el: ElementRef) {
  }

  @HostListener('window:scroll', ['$event'])

  public checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop
    const scrollPosition = window.pageYOffset

    if (scrollPosition >= componentPosition) {
      this.state = 'show'
    } else {
      this.state = 'hide'
    }
  }

  ngOnInit(){
    setTimeout( () => {
      this.el.nativeElement.offsetTop + 20 <= window.innerHeight ? this.state = "show" : this.state = "hide";
    }, 50);
  }


}
