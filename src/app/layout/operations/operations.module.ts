import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperationsRoutingModule } from './operations-routing.module';
import { OperationsComponent } from './operations.component';
import { PageHeaderModule } from 'src/app/shared';

@NgModule({
	declarations: [ OperationsComponent ],
	imports: [ CommonModule, OperationsRoutingModule, PageHeaderModule ]
})
export class OperationsModule {}
