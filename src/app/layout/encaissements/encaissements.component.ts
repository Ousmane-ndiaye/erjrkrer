import { Component, OnInit } from '@angular/core';

import { routerTransition } from 'src/app/router.animations';
import { RestaurantService } from 'src/app/data/service/restaurant.service';
import { Restaurant } from 'src/app/data/schema/restaurant';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
	selector: 'app-encaissements',
	templateUrl: './encaissements.component.html',
	styleUrls: [ './encaissements.component.scss' ],
	animations: [ routerTransition() ]
})
export class EncaissementsComponent implements OnInit {
	restaurants: Restaurant[];
	loading: boolean;
	error: any;
	constructor(public restaurantService: RestaurantService, private spinner: NgxSpinnerService) {}

	ngOnInit() {
		this.restaurants = [];
		this.loading = true;
		this.spinner.show();
		this.restaurantService.lists().subscribe(
			(data: Restaurant[]) => {
				this.restaurants = data;
				this.loading = false;
				this.spinner.hide();
			},
			(error) => {
				this.error = error;
				this.loading = false;
				this.spinner.hide();
			}
		);
	}
}
