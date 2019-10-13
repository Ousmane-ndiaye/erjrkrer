import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatComponent } from './stat.component';
import { PartageModule } from '../partage/partage.module';

@NgModule({
	imports: [ CommonModule, PartageModule ],
	declarations: [ StatComponent ],
	exports: [ StatComponent ]
})
export class StatModule {}
