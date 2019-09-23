import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PageHeaderModule, StatModule } from 'src/app/shared';

import { CartesRoutingModule } from './cartes-routing.module';
import { CartesComponent } from './cartes.component';
import { AddCarteComponent } from './composants/forms/add-carte/add-carte.component';
import { TableListeProfilComponent } from './composants/table-liste-profil/table-liste-profil.component';

@NgModule({
	declarations: [ CartesComponent, AddCarteComponent, TableListeProfilComponent ],
	imports: [ CommonModule, CartesRoutingModule, NgbModule, StatModule, PageHeaderModule ]
})
export class CartesModule {}
