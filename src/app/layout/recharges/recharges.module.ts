import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RechargesRoutingModule } from './recharges-routing.module';
import { RechargesComponent } from './recharges.component';
import { PageHeaderModule } from 'src/app/shared';

import { StatModule } from '../../shared';

@NgModule({
	declarations: [ RechargesComponent ],
	imports: [ CommonModule, StatModule, RechargesRoutingModule, PageHeaderModule ]
})
export class RechargesModule {}
