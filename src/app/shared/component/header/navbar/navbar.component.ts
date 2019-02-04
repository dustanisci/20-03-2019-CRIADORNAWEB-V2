import { Component, OnInit } from '@angular/core';
import { KeyValuePipe } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public items = {
    '1-home': [{
      'name': 'início', 'url': '/home'
    }],
    '2-technology': [{
      'name': 'tecnologias', 'url': '/technology'
    }],
    '3-portfolio': [{
      'name': 'portfólio', 'url': '/portfolio'
    }],
    '4-about': [{
      'name': 'sobre', 'url': '/about'
    }],
    '5-contact': [{
      'name': 'contato', 'url': '/contact'
    }]
  };

  public menuIcon: boolean = false;

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