import { Component } from '@angular/core';
import { NavbarComponent } from 'src/app/shared/component/header/navbar/navbar.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  constructor(public navbar:NavbarComponent){

  }
}