import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametresRoutingModule } from './parametres-routing.module';
import { ParametresComponent } from './parametres.component';


@NgModule({
  declarations: [ParametresComponent],
  imports: [
    CommonModule,
    ParametresRoutingModule
  ]
})
export class ParametresModule { }
