import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartesRoutingModule } from './cartes-routing.module';
import { CartesComponent } from './cartes.component';
import { ModalComponent } from './composants/modal/modal.component';

@NgModule({
	declarations: [ CartesComponent ],
	imports: [ CommonModule, CartesRoutingModule, ModalComponent ]
})
export class CartesModule {}
