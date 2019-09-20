import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { PageHeaderModule, StatModule } from 'src/app/shared';

import { EncaissementsRoutingModule } from './encaissements-routing.module';
import { EncaissementsComponent } from './encaissements.component';
import { FormExtractComponent } from './composants/form-extract/form-extract.component';
import { TableTransactionComponent } from './composants/table-transaction/table-transaction.component';

@NgModule({
	declarations: [ EncaissementsComponent, FormExtractComponent, TableTransactionComponent ],
	imports: [ CommonModule, EncaissementsRoutingModule, NgbModule, StatModule, PageHeaderModule ]
})
export class EncaissementsModule {}
