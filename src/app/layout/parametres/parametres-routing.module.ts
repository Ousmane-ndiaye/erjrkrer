import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParametresComponent } from './parametres.component';

const routes: Routes = [
	{
		path: '',
		component: ParametresComponent
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class ParametresRoutingModule {}
