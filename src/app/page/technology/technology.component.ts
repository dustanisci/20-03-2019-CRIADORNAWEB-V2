import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from 'src/app/shared/component/header/navbar/navbar.component';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent implements OnInit {

  constructor(private navbar:NavbarComponent) { }

  ngOnInit() {
    console.log(this.navbar.items['5-contact'][0].url)
  }

}
