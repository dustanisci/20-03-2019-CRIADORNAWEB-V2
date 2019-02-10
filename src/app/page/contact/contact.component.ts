import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [
    trigger('scrollAnimation', [
      state('show', style({
        opacity: 1
      })),
      state('hide', style({
        opacity: 0
      })),
      transition('show => hide', animate('700ms ease-out')),
      transition('hide => show', animate('700ms ease-in'))
    ])
  ]
})
export class ContactComponent implements OnInit {
  public formWhats: FormGroup;
  public environment = environment.apiWhatsapp;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formWhats = this.formBuilder.group({
      textWhats: this.formBuilder.control('', [])
    })
  }
}
