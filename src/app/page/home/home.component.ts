import { Component } from '@angular/core';
import { items } from 'src/app/shared/component/header/navbar/navbar.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public items = items;
  constructor() {
  }
}
