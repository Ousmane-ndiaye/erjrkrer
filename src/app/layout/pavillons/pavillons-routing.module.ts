import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PavillonsComponent } from './pavillons.component';

const routes: Routes = [
	{
		path: '',
		component: PavillonsComponent
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class PavillonsRoutingModule {}
