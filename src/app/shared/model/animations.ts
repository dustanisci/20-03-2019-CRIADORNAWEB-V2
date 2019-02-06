import { state, style, transition, animate, trigger } from '@angular/animations';

export const Opacity = trigger('scrollAnimation', [
    state('show', style({
        opacity: 1
    })),
    state('hide', style({
        opacity: 0
    })),
    transition('show => hide', animate('700ms ease-out')),
    transition('hide => show', animate('700ms ease-in'))
]);

export class Animations {
    public state = "hide";

    public checkScroll(componentPosition, scrollPosition): void {
        console.log(componentPosition);
        console.log(scrollPosition);
        if (scrollPosition >= componentPosition) {
            this.state = 'show';
        } else {
            this.state = 'hide';
        }
        console.log(this.state)
    }

    public checkOpenComponent(componentPosition): void {
        setTimeout(() => {
            // componentPosition + 20 <= window.innerHeight ? this.state = "show" : this.state = "hide";
        }, 50);
    }

}