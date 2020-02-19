import { Component, OnInit } from '@angular/core';
import { items } from '../navbar/navbar.component';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {

  public items = items;

  constructor() {
  }

  ngOnInit() {
  }

}