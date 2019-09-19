import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EncaissementsRoutingModule } from './encaissements-routing.module';
import { EncaissementsComponent } from './encaissements.component';


@NgModule({
  declarations: [EncaissementsComponent],
  imports: [
    CommonModule,
    EncaissementsRoutingModule
  ]
})
export class EncaissementsModule { }
