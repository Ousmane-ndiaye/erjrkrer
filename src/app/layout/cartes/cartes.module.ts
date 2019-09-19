import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartesRoutingModule } from './cartes-routing.module';
import { CartesComponent } from './cartes.component';


@NgModule({
  declarations: [CartesComponent],
  imports: [
    CommonModule,
    CartesRoutingModule
  ]
})
export class CartesModule { }
