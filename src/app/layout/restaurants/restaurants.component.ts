import { Component, OnInit } from '@angular/core';

import { routerTransition } from 'src/app/router.animations';

@Component({
	selector: 'app-restaurants',
	templateUrl: './restaurants.component.html',
	styleUrls: [ './restaurants.component.scss' ],
	animations: [ routerTransition() ]
})
export class RestaurantsComponent implements OnInit {
	constructor() {}

	ngOnInit() {}
}
