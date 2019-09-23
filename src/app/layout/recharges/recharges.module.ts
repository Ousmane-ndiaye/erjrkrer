import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { RechargesRoutingModule } from './recharges-routing.module';
import { RechargesComponent } from './recharges.component';
import { PageHeaderModule, StatModule } from 'src/app/shared';
import { AddComponent } from './composants/forms/add/add.component';
import { TableRechargesComponent } from './composants/table-recharges/table-recharges.component';

@NgModule({
	declarations: [ RechargesComponent, AddComponent, TableRechargesComponent ],
	imports: [ CommonModule, StatModule, NgbModule, RechargesRoutingModule, PageHeaderModule ]
})
export class RechargesModule {}
