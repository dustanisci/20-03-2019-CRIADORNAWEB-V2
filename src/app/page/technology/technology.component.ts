import { Component, OnInit } from '@angular/core';
import { items } from 'src/app/shared/component/header/navbar/navbar.component';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent implements OnInit {

  public items = items;

  constructor() { }

  ngOnInit() {
  }

}
