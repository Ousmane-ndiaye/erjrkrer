import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { RestaurantsRoutingModule } from './restaurants-routing.module';
import { RestaurantsComponent } from './restaurants.component';
import { AddRestaurantComponent } from './composants/add-restaurant/add-restaurant.component';
import { TableRestaurantsComponent } from './composants/table-restaurants/table-restaurants.component';

import { PageHeaderModule, StatModule, PartageModule } from 'src/app/shared';

@NgModule({
	declarations: [ RestaurantsComponent, AddRestaurantComponent, TableRestaurantsComponent ],
	imports: [ CommonModule, RestaurantsRoutingModule, NgbModule, StatModule, PageHeaderModule, PartageModule ]
})
export class RestaurantsModule {}
