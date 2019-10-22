import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PavillonsRoutingModule } from './pavillons-routing.module';
import { PavillonsComponent } from './pavillons.component';
import { AddPavillonComponent } from './composants/add-pavillon/add-pavillon.component';
import { TablePavillonsComponent } from './composants/table-pavillons/table-pavillons.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StatModule, PageHeaderModule, PartageModule } from 'src/app/shared';
import { ChambresComponent } from './composants/chambres/chambres.component';

@NgModule({
	declarations: [ PavillonsComponent, AddPavillonComponent, TablePavillonsComponent, ChambresComponent ],
	imports: [ CommonModule, PavillonsRoutingModule, NgbModule, StatModule, PageHeaderModule, PartageModule ]
})
export class PavillonsModule {}
