import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EncaissementsComponent } from './encaissements.component';

const routes: Routes = [
	{
		path: '',
		component: EncaissementsComponent
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class EncaissementsRoutingModule {}
