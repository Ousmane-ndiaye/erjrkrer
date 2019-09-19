import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RechargesRoutingModule } from './recharges-routing.module';
import { RechargesComponent } from './recharges.component';


@NgModule({
  declarations: [RechargesComponent],
  imports: [
    CommonModule,
    RechargesRoutingModule
  ]
})
export class RechargesModule { }
