import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public items = [
    { 'name': 'início', 'url': '/home' },
    { 'name': 'tecnologias', 'url': '/technology' },
    { 'name': 'sobre', 'url': '/about' },
    { 'name': 'portfólio', 'url': '/portfolio' },
    { 'name': 'contato', 'url': '/contact' }
  ];

  public menuIcon: boolean = false;
  public menu: boolean = false;

  constructor() { }

  ngOnInit() {
    this.menuMobile(window.innerWidth);
  }

  public menuMobile(event) {
    event <= 1279 ? this.menu = true : this.menu = false
  }

}
