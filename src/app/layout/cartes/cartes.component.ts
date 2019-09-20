import { Component, OnInit } from '@angular/core';
import { routerTransition } from 'src/app/router.animations';

@Component({
	selector: 'app-cartes',
	templateUrl: './cartes.component.html',
	styleUrls: [ './cartes.component.scss' ],
	animations: [ routerTransition() ]
})
export class CartesComponent implements OnInit {
	constructor() {}

	ngOnInit() {}
}
