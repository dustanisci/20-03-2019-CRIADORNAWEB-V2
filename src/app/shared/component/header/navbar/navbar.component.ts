import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  private items = [
    { 'name': 'início', 'url': '/home' },
    { 'name': 'tecnologias', 'url': '/technology' },
    { 'name': 'sobre', 'url': '/about' },
    { 'name': 'portfólio', 'url': '/portfolio' },
    { 'name': 'contato', 'url': '/contact' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
