import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
	{
		path: '',
		component: LayoutComponent,
		children: [
			{ path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
			{ path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule) },
			{ path: 'recharges', loadChildren: () => import('./recharges/recharges.module').then((m) => m.RechargesModule) },
			{
				path: 'encaissements',
				loadChildren: () => import('./encaissements/encaissements.module').then((m) => m.EncaissementsModule)
			},
			{ path: 'operations', loadChildren: () => import('./operations/operations.module').then((m) => m.OperationsModule) },
			{ path: 'cartes', loadChildren: () => import('./cartes/cartes.module').then((m) => m.CartesModule) },
			{ path: 'restaurants', loadChildren: () => import('./restaurants/restaurants.module').then((m) => m.RestaurantsModule) },
			{ path: 'parametres', loadChildren: () => import('./parametres/parametres.module').then((m) => m.ParametresModule) }
		]
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class LayoutRoutingModule {}
