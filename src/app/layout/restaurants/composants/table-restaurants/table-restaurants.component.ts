import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/app/data/service/restaurant.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Restaurant } from 'src/app/data/schema/restaurant';

@Component({
	selector: 'app-table-restaurants',
	templateUrl: './table-restaurants.component.html',
	styleUrls: [ './table-restaurants.component.scss' ]
})
export class TableRestaurantsComponent implements OnInit {
	restaurants: Restaurant[];
	loading = false;
	error = '';

	constructor(public restaurantService: RestaurantService, private router: Router, private spinner: NgxSpinnerService) {}

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
