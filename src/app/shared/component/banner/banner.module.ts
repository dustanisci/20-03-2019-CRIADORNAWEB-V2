import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner.component';
import { RouterModule } from '@angular/router';

export const routeBanner = [
  {
    path: 'contact',
    loadChildren: () => import('./../../../page/contact/contact.module').then(m => m.ContactModule)
  },
];

@NgModule({
  declarations: [
    BannerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routeBanner),
  ],
  exports: [
    BannerComponent
  ]
})
export class BannerModule { }
