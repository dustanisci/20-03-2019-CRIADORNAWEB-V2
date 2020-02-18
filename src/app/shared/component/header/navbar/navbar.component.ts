import { Component, OnInit } from '@angular/core';

export const items = [
  { name: 'Início', url: '/home' },
  { name: 'Tecnologias', url: '/technology' },
  { name: 'Portfólio', url: '/portfolio' },
  { name: 'Sobre', url: '/about' },
  { name: 'Contato', url: '/contact' }];
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

  public menuIcon = false;
  public items = items;

  constructor() {
  }

  ngOnInit() {
    this.menuMobile(window.innerWidth);
  }

  public menuMobile(event) {
    event <= 1279 ? this.menuIcon = false : this.menuIcon = true;
  }

  public scrollTop() {
    window.scrollTo(0, 0);
  }
}
